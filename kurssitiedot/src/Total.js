import React from 'react'

const Total = ({ parts }) => {
  const exercises = parts.map(part => part.exercises)

  const total = exercises.reduce(
    (exercise, currentValue) => exercise + currentValue
  )

  return <p>Yhteensä {total} tehtävää</p>
}

export default Total
