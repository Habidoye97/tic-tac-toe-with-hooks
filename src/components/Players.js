import React, { useEffect, useState } from 'react'
import Input from './Input'

const Players = () => {
  const [players, setPlayers] = useState({'Player-X': '', 'Player-O': ''})

  const handleChange = (e) => {
    setPlayers((preState) => ({...preState, [e.target.name]: e.target.value}))
  } 

  useEffect(() => {
    console.log(players)
  }, [players])
  return (
    <div className='players'>
      {Object.keys(players).map((key, index) => {
        return (
          <label key={index} htmlFor={key}>{key}
            <Input handleChange={(e) => handleChange(e)} player={key}/>
          </label>
        )
      })}
      
    </div>
  )
}

export default Players
