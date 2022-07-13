import React from "react";
import Board from './component/Board';

// export default () => (
//   <>
//     <h1>Welcome to React Vite Micro App!</h1>
//     <p>Hard to get more minimal than this React app.</p>
//   </>
// );

const App = () => {
    return ( 
    <>
        
        <h1> TIC TAC TOE</h1>{" "} 
       
        <Board/>
        </>
    );
};
export default App;