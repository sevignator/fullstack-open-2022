import { useState } from "react";
import { nanoid } from "nanoid";

import { InputField } from "./InputField";

export function NewContactForm({persons, setPersons}) {
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");

    function addNewName(event) {
        event.preventDefault();

        const isAlreadyPresent = persons.some(person => person.name === newName);

        if (isAlreadyPresent) {
            alert(`${newName} is already added to numberbook`);
            return;
        }

        setPersons(prevState => ([
            ...prevState,
            {
                name: newName,
                number: newNumber,
                id: nanoid()
            }
        ]));

        setNewName("");
        setNewNumber("");
    }

    return (
        <form onSubmit={addNewName}>
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
