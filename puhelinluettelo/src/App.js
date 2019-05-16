import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import Error from './components/Error'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    personService.getAll().then(initialPersons => setPersons(initialPersons))
  }, [])

  const handleNameInput = event => {
    setNewName(event.target.value)
  }

  const handleNumberInput = event => {
    setNewNumber(event.target.value)
  }

  const handleSearchInput = event => {
    setSearch(event.target.value)
  }

  const addEntry = event => {
    event.preventDefault()

    const newEntry = {
      name: newName,
      number: newNumber
    }

    if (persons.find(element => element.name === newName)) {
      const result = window.confirm(
        `${newName} on jo luettelossa, korvataanko vanha numero uudella?`
      )

      result && replaceEntry(newEntry)

      setNewName('')
      setNewNumber('')
      return
    }

    personService.create(newEntry).then(returnedEntry => {
      setPersons(persons.concat(returnedEntry))
      setNewName('')
      setNewNumber('')
      setMessage(`${returnedEntry.name} lisätty`)
    })
  }

  const removeEntry = item => {
    const result = window.confirm(`Poistetaanko ${item.name}?`)

    if (result) {
      personService.remove(item.id)
      const newPersons = persons.filter(person => person.id !== item.id)
      setPersons(newPersons)
      setMessage(`${item.name} poistettu`)
    }
  }

  const replaceEntry = item => {
    const oldEntry = persons.find(person => person.name === item.name)

    const newEntry = { ...oldEntry, number: item.number }

    personService
      .replace(newEntry)
      .then(returnedEntry => {
        setPersons(
          persons.map(person =>
            person.id !== returnedEntry.id ? person : returnedEntry
          )
        )
        setMessage(`${item.name} muutettu`)
      })
      // I guess this is all that is needed in 2.20*
      .catch(setError(`${item.name} oli jo poistettu`))
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(search.toLowerCase())
  )

  const personList = filteredPersons.map(person => (
    <li key={person.name}>
      {person.name} {person.number}{' '}
      <button onClick={() => removeEntry(person)}>poista</button>
    </li>
  ))

  return (
    <>
      <h1>Puhelinluettelo</h1>
      <Filter search={search} handleSearchInput={handleSearchInput} />
      <h2>Lisää uusi</h2>
      <PersonForm
        addEntry={addEntry}
        newName={newName}
        handleNameInput={handleNameInput}
        newNumber={newNumber}
        handleNumberInput={handleNumberInput}
      />
      <h2>Numerot</h2>
      <Persons persons={personList} />
      <Notification message={message} setMessage={setMessage} />
      <Error error={error} setError={setError} />
    </>
  )
}

export default App
