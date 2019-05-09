import React from 'react'

const Total = ({ parts }) => {
  const total = parts.reduce(
    (accumulator, part) => accumulator + part.exercises,
    0
  )

  return <p>Yhteensä {total} tehtävää</p>
}

export default Total
