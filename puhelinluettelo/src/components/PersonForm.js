import React from 'react'

const PersonForm = ({
  addPerson,
  newName,
  handleNameInput,
  newNumber,
  handleNumberInput
}) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        nimi: <input value={newName} onChange={handleNameInput} />
      </div>
      <div>
        numero: <input value={newNumber} onChange={handleNumberInput} />
      </div>
      <div>
        <button type="submit">lisää</button>
      </div>
    </form>
  )
}

export default PersonForm
