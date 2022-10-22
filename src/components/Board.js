import React from 'react';
import Square from './Square';

const Board = ({squares, onClick}) => {
  return (
    <div className='boards'>
      {
        squares.map((square, index) => (
          <Square key={index} value={square} onClick={() => onclick(index)} />
        ))
      }
    </div>
    
  )
}

export default Board