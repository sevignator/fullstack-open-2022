import { useState } from 'react'

import personService from '../services/persons'
import { InputField } from './InputField'

export function Form({ persons, setPersons, handleNotification }) {
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  function submitContact(event) {
    event.preventDefault()

    if (!newName || !newNumber) return

    const isAlreadyPresent = persons.some(person => person.name === newName)

    if (isAlreadyPresent) {
      if (window.confirm(`${newName} is already in your phonebook, replace the old number with a new one?`)) {
        const person = persons.find(person => person.name === newName)

        personService
          .update(person.id, {
            ...person,
            number: newNumber
          })
          .then(data => {
            setPersons(prevPersons => prevPersons.map(prevPerson => {
                return prevPerson.id === person.id ? data : prevPerson
              }
            ))
          })
          .then(() => {
            handleNotification('success', `${person.name}’s phone number has been updated.`)
            clearForm()
          })
          .catch(error => {
            handleNotification('error', error.response.data.error)
            console.error(error.response.data)
          })
      }
    } else {
      personService
        .create({
          name: newName,
          number: newNumber
        })
        .then(data => {
          setPersons(prevPersons => ([ ...prevPersons, data ]))
        })
        .then(() => {
          handleNotification('success', `${newName} has been added to your phonebook.`)
          clearForm()
        })
        .catch(error => {
          handleNotification('error', error.response.data.error)
          console.error(error.response.data)
        })
    }
  }

  function clearForm() {
    setNewName('')
    setNewNumber('')
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
  )
}
