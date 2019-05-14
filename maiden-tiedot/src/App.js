import React, { useState, useEffect } from 'react'
import CountryDetails from './components/CountryDetails'
import CountryList from './components/CountryList'

const App = () => {
  const [allCountries, setAllCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('')
  const [search, setSearch] = useState('')
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await response.json()
        setAllCountries(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  const handleInput = e => {
    setSearch(e.target.value)
  }

  const handleShow = country => {
    setSelectedCountry(country)
    setShowDetails(true)
  }

  const handleHide = () => {
    setSelectedCountry('')
    setShowDetails(false)
  }

  const showCountries = () => {
    const filteredCountries = allCountries.filter(country =>
      country.name.toLowerCase().includes(search.toLowerCase())
    )

    if (filteredCountries.length === 1) {
      return <CountryDetails country={filteredCountries[0]} />
    } else if (filteredCountries.length <= 10) {
      return (
        <CountryList countries={filteredCountries} handleShow={handleShow} />
      )
    } else {
      return <p>Too many matches, specify another filter</p>
    }
  }

  return (
    <>
      {showDetails ? (
        <>
          <CountryDetails country={selectedCountry} />
          <button onClick={handleHide}>hide details</button>
        </>
      ) : (
        <>
          <label>
            Find countries: <br />
            <input onChange={handleInput} value={search} />
          </label>
          {search && <div>{showCountries()}</div>}
        </>
      )}
    </>
  )
}

export default App
