import React,{useState} from 'react';
import Board from './component/Board';
import './styles/root.scss';
import { calculateWinner } from '../helper';
// export default () => (
//   <>
//     <h1>Welcome to React Vite Micro App!</h1>
//     <p>Hard to get more minimal than this React app.</p>
//   </>
// );

const App = () => {
  const [board,setBoard]=useState(Array(9).fill(null));
const [isXNext,setisXNext]=useState(false);
// console.log(board);
console.log('board rerender');

const winner=calculateWinner(board);
// console.log(winner);

const message=winner?`Winner is ${winner}`:`Next player is ${isXNext?'X':'O'}`


const handleSquareClick=(position)=>{

  if(board[position] || winner )
  return;
  setBoard((prev)=>{
    return prev.map((square,pos)=>
    {
      if(pos===position)
    {
      return isXNext? 'X':'O';
    }
    return square;
    })
  });
  setisXNext((prev)=>!prev);
};
  return (
    <div className="app">
      <h1> TIC TAC TOE</h1> 
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};
export default App;
