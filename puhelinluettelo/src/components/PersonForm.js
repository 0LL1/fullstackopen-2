import React from 'react'

const PersonForm = ({
  addEntry,
  newName,
  handleNameInput,
  newNumber,
  handleNumberInput
}) => {
  return (
    <form onSubmit={addEntry}>
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
