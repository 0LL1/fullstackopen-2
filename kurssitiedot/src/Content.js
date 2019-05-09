import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {
  const partComponents = parts.map(part => <Part part={part} key={part.id} />)

  return <div>{partComponents}</div>
}

export default Content
