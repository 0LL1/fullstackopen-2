import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')

  const handleInput = event => {
    setNewName(event.target.value)
  }

  const addEntry = event => {
    event.preventDefault()

    const newEntry = {
      name: newName
    }

    if (persons.find(element => element.name === newName)) {
      alert(`${newName} on jo luettelossa`)
      setNewName('')
      return
    }

    setPersons(persons.concat(newEntry))
    setNewName('')
  }

  const personList = persons.map(person => (
    <li key={person.name}>{person.name}</li>
  ))

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addEntry}>
        <div>
          nimi: <input value={newName} onChange={handleInput} />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      <ul>{personList}</ul>
    </div>
  )
}

export default App
