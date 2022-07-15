import React,{useState} from 'react';
import Board from './component/Board';
import History from './component/History';
import statusMessage from './component/statusMessage';
import './styles/root.scss';
import { calculateWinner } from '../helper';
// export default () => (
//   <>
//     <h1>Welcome to React Vite Micro App!</h1>
//     <p>Hard to get more minimal than this React app.</p>
//   </>
// );

const App = () => {
  const [history,setHistory]=useState([{board: Array(9).fill(null),isXNext: true},]);
// const [isXNext,setisXNext]=useState(false);
// console.log(board);
// console.log('board rerender');
const [currentMove,setCurrentMove]=useState(0);
const current=history[currentMove];
// const winner=calculateWinner(current.board);
// // console.log(winner);

// const message=winner?`Winner is ${winner}`:`Next player is ${current.isXNext?'X':'O'}`


const handleSquareClick=(position)=>{

  if(current.board[position] || winner )
  return;
  setHistory((prev)=>{
    const last=prev[prev.length-1];
    const newBoard= last.board.map((square,pos)=>
    {
      if(pos===position)
    {
      return last.isXNext? 'X':'O';
    }
    return square;
    })
    return prev.concat({board:newBoard,isXNext:!last.isXNext});
  });
  setCurrentMove(prev=>prev+1);
};

const moveTo = (move)=>{
  setCurrentMove(move);
}
  return (
    <div className="app">
      <h1> TIC TAC TOE</h1> 
    <statusMessage winner={winner} current={current}/>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <History history={history} moveTo={moveTo} currentMove={currentMove}/>
    </div>
  );
};
export default App;
