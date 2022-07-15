import React from 'react'

const statusMessage = ({winner,current}) => {

const noMovesLeft=current.board.every(el=>el!==null);

  return (
    <h2>
      {/* const winner=calculateWinner(current.board); */}
{/* console.log(winner); */}

{/* const message=winner?`Winner is ${winner}`:`Next player is ${current.isXNext?'X':'O'}` */}
    {winner.length>0 && `winner is ${winner}`}
    {!winner &&  !noMovesLeft && `Next player is ${current.isXNext?'X':'O'}`}
    {!winner &&  !noMovesLeft && `X and 0 tied`}
    </h2>
  )
}

export default statusMessage
