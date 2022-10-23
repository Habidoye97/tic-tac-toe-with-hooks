import React from 'react'

const Input = ({player, handleChange}) => {
  return (
    <input type="text" onChange={handleChange} name={player}/>
  )
}

export default Input
