import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
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
      alert(`${newName} on jo luettelossa`)
      setNewName('')
      setNewNumber('')
      return
    }

    setPersons(persons.concat(newEntry))
    setNewName('')
    setNewNumber('')
  }

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(search.toLowerCase())
  )

  const personList = filteredPersons.map(person => (
    <li key={person.name}>
      {person.name} {person.number}
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
    </>
  )
}

export default App
