import { useState, useEffect } from "react";
import axios from "axios";

import { FilterSection } from "./components/FilterSection";
import { NewContactForm } from "./components/NewContactForm";
import { ContactsList } from "./components/ContactsList";

export function App() {
    const [persons, setPersons] = useState([]);
    const [pattern, setPattern] = useState("");

    useEffect(() => {
        axios
            .get("http://localhost:3001/persons"``)
            .then(response => {
                console.log(response.data);
                setPersons(response.data);
            });
    }, []);

    return (
        <div>
            <h2>Phonebook</h2>
            <FilterSection
                pattern={pattern}
                setPattern={setPattern}
            />
            <NewContactForm
                persons={persons}
                setPersons={setPersons}
            />
            <h2>Numbers</h2>
            <ContactsList
                persons={persons}
                pattern={pattern}
            />
        </div>
    );
}
