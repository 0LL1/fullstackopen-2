import React from 'react'
import Weather from './Weather'

const CountryDetails = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>
        Capital: {country.capital} <br /> Population: {country.population}
      </p>
      <h2>Languages:</h2>
      <ul>
        {country.languages.map(lang => (
          <li key={lang.iso639_1}>{lang.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt={`flag of ${country}`} width="200px" />
      <Weather capital={country.capital} />
    </div>
  )
}

export default CountryDetails
