import React, { useState, useEffect } from 'react'

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      try {
        // not really hidden but I put the key there anyway
        const key = process.env.REACT_APP_WEATHER_API_KEY

        const response = await fetch(
          `https://api.apixu.com/v1/current.json?key=${key}&q=${capital}`
        )
        const data = await response.json()
        setWeather(data.current)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [capital])

  return !isLoading ? (
    <div>
      <h2>Weather in {capital}</h2>
      <img
        src={weather.condition.icon}
        alt={`Weather condition is ${weather.condition.text}`}
        width="200px"
      />
      <p>Temperature: {weather.temp_c} &deg;C </p>
      <p>
        Wind: {weather.wind_kph} direction {weather.wind_dir}
      </p>
    </div>
  ) : (
    <h1>Loading...</h1>
  )
}

export default Weather
