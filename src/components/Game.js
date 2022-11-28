import React, { useEffect, useState } from 'react';
import Board from './Board';
import { calculateWinner } from './helper';

const Game = ({players}) => {
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true)
  const winner = calculateWinner(history[stepNumber])
  const XO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    // console.log(squares)
    
    // return if won or occupied
    if (winner || squares[i]) return;
    // select square
    squares[i] = XO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXIsNext(!xIsNext);
  };

  // useEffect(() => {
  //   console.log(history)
  //   console.log(stepNumber)
  //   console.log(xIsNext)
  // }, [history, stepNumber, xIsNext])

  const jumpTo = (step) => {
    console.log(step)
    setStepNumber(step)
    setXIsNext(step % 2 === 0)
  };

  const renderMoves = () => 
    history.map((_step, move) => {
      console.log(move)
      const destination = move ? `Go to move #${move}` : "Go to Start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
        
      );
    });
  
  return (
    <div>
      <h1 className='header'>REACT TIC-TAC-TOE-GAME WITH HOOKS</h1>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className='history-wrapper'>
        <div>
          <h3>History</h3>
          {renderMoves()}
        </div>
        <h3>{winner ? "Winner: " + winner : "Next Player: " + XO}</h3>
      </div>
    </div>
  )
}

export default Game
