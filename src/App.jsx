import React from "react";
import Board from './component/Board';
import "./styles/root.scss";
// export default () => (
//   <>
//     <h1>Welcome to React Vite Micro App!</h1>
//     <p>Hard to get more minimal than this React app.</p>
//   </>
// );

const App = () => {
    return ( 
    <div className="app">
        
        <h1> TIC TAC TOE</h1>{" "} 
       
        <Board/>
        </div>
    );
};
export default App;