import { useState } from "react";
import { nanoid } from "nanoid";

import { FilterSection } from "./components/FilterSection";
import { NewContactForm } from "./components/NewContactForm";
import { ContactsList } from "./components/ContactsList";

export function App() {
    const [persons, setPersons] = useState([
        {name: "Arto Hellas", number: "040-123456", id: nanoid()},
        {name: "Ada Lovelace", number: "39-44-5323523", id: nanoid()},
        {name: "Dan Abramov", number: "12-43-234345", id: nanoid()},
        {name: "Mary Poppendieck", number: "39-23-6423122", id: nanoid()}
    ]);
    const [pattern, setPattern] = useState("");

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
