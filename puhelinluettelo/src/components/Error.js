import React from 'react'

const Error = ({ error, setError }) => {
  if (error === null) {
    return null
  }

  setTimeout(() => {
    setError(null)
  }, 3000)

  return <h3 className="error">{error}</h3>
}

export default Error
