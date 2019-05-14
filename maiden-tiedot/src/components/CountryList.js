import React from 'react'

const CountryList = ({ countries, handleShow }) => {
  const list = countries.map(country => (
    <p key={country.numericCode}>
      {country.name}{' '}
      <button onClick={() => handleShow(country)}>show details</button>
    </p>
  ))

  return <div>{list}</div>
}

export default CountryList
