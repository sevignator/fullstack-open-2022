import personService from '../services/persons'
import { Person } from './Person'

export function List({ persons, setPersons, pattern, handleNotification }) {
  function deletePerson(id) {
    personService
      .remove(id)
      .then(() => {
        setPersons(prevPersons => {
          return prevPersons.filter(prevPerson => prevPerson.id !== id)
        })
      })
      .catch(err => {
        handleNotification('This person cannot be deleted.')
        console.error(err)
      })
  }

  return (
    <ul>
      {persons
        .filter(person => {
          const regex = new RegExp(pattern, 'i')
          return regex.test(person.name)
        })
        .map(person =>
          <Person
            key={person.id}
            name={person.name}
            number={person.number}
            deletePerson={() => deletePerson(person.id)}
          />
        )
      }
    </ul>
  )
}
