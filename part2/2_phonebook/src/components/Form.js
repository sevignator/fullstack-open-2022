import { useState } from "react";

import personService from "../services/persons";
import { InputField } from "./InputField";

export function Form({ persons, setPersons, handleNotification }) {
    const [ newName, setNewName ] = useState("");
    const [ newNumber, setNewNumber ] = useState("");

    function submitContact(event) {
        event.preventDefault();

        if (!newName || !newNumber) return;

        const isAlreadyPresent = persons.some(person => person.name === newName);

        if (isAlreadyPresent) {
            if (window.confirm(`${newName} is already in your phonebook, replace the old number with a new one?`)) {
                const person = persons.find(person => person.name === newName);

                personService
                    .update(person.id, {
                        ...person,
                        number: newNumber
                    })
                    .then(data => {
                        setPersons(prevPersons => prevPersons.map(prevPerson => {
                                return prevPerson.id === person.id ? data : prevPerson;
                            }
                        ));

                        clearForm();
                    })
                    .then(() => {
                        handleNotification("success", `${person.name}’s phone number has been updated.`);
                    })
                    .catch(err => {
                        handleNotification("error", `${person.name}’s information is no longer available.`);
                        console.error(err);
                    });
            }
        } else {
            personService
                .create({
                    name: newName,
                    number: newNumber
                })
                .then(data => {
                    setPersons(prevPersons => ([ ...prevPersons, data ]));
                })
                .then(() => {
                    handleNotification("success", `${newName} has been added to your phonebook.`);
                })
                .catch(err => {
                    handleNotification("error", `${newName} could not be added to your phonebook.`);
                    console.error(err);
                });

            clearForm();
        }
    }

    function clearForm() {
        setNewName("");
        setNewNumber("");
    }

    return (
        <form onSubmit={submitContact}>
            <div>
                <h2>Add a new</h2>
                <InputField
                    name="name"
                    state={newName}
                    setState={setNewName}
                />
                <InputField
                    name="number"
                    state={newNumber}
                    setState={setNewNumber}
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
}
