import React from 'react'
import Square from './Square'
const Board = () => {
  return (
    <div className='board'>
      <div className='board-row'>
        <Square value={0}/>
        <Square value={1}>
          <p>Hello</p>
          <p>Ma children hu Mujha child kii tarha treat karagga</p>
          </Square>
        <Square value={2}/>
      </div>
      <div className='board-row'>
        <Square value={3}/>
        <Square value={4}/>
        <Square value={5}/>
      </div>
      <div className='board-row'>
        <Square value={7}/>
        <Square value={8}/>
        <Square value={9}/>
      </div>
    </div>
  )
}

export default Board;
