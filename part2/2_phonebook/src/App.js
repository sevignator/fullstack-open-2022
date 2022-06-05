import { useState, useEffect } from "react";

import personService from "./services/persons";
import { Notification } from "./components/Notification";
import { Filter } from "./components/Filter";
import { Form } from "./components/Form";
import { List } from "./components/List";

export function App() {
    const [ persons, setPersons ] = useState([]);
    const [ pattern, setPattern ] = useState("");
    const [ notification, setNotification ] = useState({
        type: null,
        message: "",
    });

    useEffect(() => {
        personService
            .getAll()
            .then(data => {
                setPersons(data);
            })
            .catch(err => {
                handleNotification("error", "Could not fetch your phonebook data.");
                console.error(err);
            });
    }, []);

    function handleNotification(type, message) {
        setNotification({ type, message });

        setTimeout(() => {
            setNotification({
                type: null,
                message: ""
            });
        }, 3000);
    }

    return (
        <div>
            {notification.message && <Notification notification={notification} />}
            <h2>Phonebook</h2>
            <Filter
                pattern={pattern}
                setPattern={setPattern}
            />
            <Form
                persons={persons}
                setPersons={setPersons}
                handleNotification={handleNotification}
            />
            <h2>Numbers</h2>
            <List
                persons={persons}
                setPersons={setPersons}
                pattern={pattern}
                handleNotification={handleNotification}
            />
        </div>
    );
}
