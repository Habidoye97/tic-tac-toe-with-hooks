import React, { useEffect, useState } from 'react'
import Game from './Game'
import Input from './Input'

const Players = () => {
  const [players, setPlayers] = useState({'Player-X': '', 'Player-O': ''})
  const [message, setMessage] = useState('me')
  const [showMessage, setShowMessage] = useState(false)
  const [startGame, setStartGame] = useState(false)

  const handleChange = (e) => {
    setPlayers((preState) => ({...preState, [e.target.name]: e.target.value}))
  } 

  useEffect(() => {
    console.log(players)
  }, [players])

  const submitPlayerName = (e) => {
    e.preventDefault()
    if (players['Player-X'] === '' && players['Player-O'] === '') {
      setMessage('Players X and O name is needed to start the game')
      setShowMessage(true)
    } else if (players['Player-X'] === '') {
      setMessage('Players X is needed to start the game')
      setShowMessage(true)
    } else if (players['Player-O'] === '') {
      setMessage('Players O is needed to start the game')
      setShowMessage(true)
    }
    setStartGame(true)
  }
  return (
    <>
      {!startGame && 
        <div className='players'>
          <h1 className='header'>REACT TIC-TAC-TOE-GAME WITH HOOKS</h1>
          <p className={`message ${showMessage ? 'show': 'hidden'}`}>
            {message}
            <button onClick={() => {setShowMessage(!showMessage)}}>X</button>
          </p>
          {Object.keys(players).map((key, index) => {
            return (
              <label key={index} htmlFor={key}>{key}
                <Input handleChange={(e) => handleChange(e)} player={key}/>
              </label>
            )
          })}
          <button className='start-game' onClick={submitPlayerName}>START GAME</button>
      
        </div>
      }
      {startGame && <Game players={players}/>}

    </>
    
  )
}

export default Players
