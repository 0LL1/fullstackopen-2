import React from 'react'

const Notification = ({ message, setMessage }) => {
  if (message === null) {
    return null
  }

  setTimeout(() => {
    setMessage(null)
  }, 3000)

  return <h3 className="success">{message}</h3>
}

export default Notification
