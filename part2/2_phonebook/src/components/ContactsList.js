import { Person } from "./Person";

export function ContactsList({persons, pattern}) {
    return (
        <ul>
            {persons
                .filter(person => {
                    const regex = new RegExp(pattern, "i");
                    return regex.test(person.name);
                })
                .map(person =>
                    <Person
                        key={person.id}
                        name={person.name}
                        number={person.number}
                    />
                )}
        </ul>
    );
}
