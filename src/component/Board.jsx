import React ,{useState} from "react";

import Square from "./Square";

const Board = () => {

const [board,setBoard]=useState(Array(9).fill(null));
const [isXNext,setisXNext]=useState(false);
// console.log(board);


const handleSquareClick=(position)=>{

  if(board[position])
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

const renderSquare=(position)=>{
  return(<Square value={board[position]}  onclick={()=>{
    handleSquareClick(position)
     }}/>)

}

// onclick={functionname()}   ----> if u write in this way then not work bcz it executes immediately  this is a principle of javascript node react
  return (
    <div className="board">
      <div className="board-row">
        {/* <Square value={board[0]}  onclick={()=>{
       handleSquareClick(0)
        }}/>
        <Square value={board[1]}>
          <p>Hello</p>
          <p>Ma children hu Mujha child kii tarha treat karagga</p>
        </Square>
        <Square value={board[2]} /> */}
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
      {/*  <Square value={board[3]} />
        <Square value={board[4]} />
        <Square value={board[5]} /> */}
         {renderSquare(3)}
         {renderSquare(4)}
         {renderSquare(5)}
      </div>
       <div className="board-row">
        {/*<Square value={board[6]} />
        <Square value={board[7]} />
        <Square value={board[8]} /> */}
         {renderSquare(6)}
         {renderSquare(7)}
         {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
