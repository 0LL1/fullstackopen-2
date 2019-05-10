import React from 'react'

const Filter = ({ search, handleSearchInput }) => {
  return (
    <div>
      rajaa näytettäviä: <input value={search} onChange={handleSearchInput} />
    </div>
  )
}

export default Filter
