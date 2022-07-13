import React from "react";
// import './Square.style.css';

// const Square = (props) => {
//     // console.log(props);
//     return <button type="button">{props.value}</button>;
// }

// const Square = ({value,children}) => {
//     // return <button type="button">{value}</button>;
//     return <button type="button">{children}{value}</button>;
// }

// destructing perform bcz value treat as a object then write in this method

const Square = ({value,onclick }) => {
  return (
    <button type="button" className="square" onClick={onclick}>
      {value}
    </button>
  );
  // return <button type="button">{children}</button>;
//   onClick={()=>{
//     console.log(value);
// }}>
};

export default Square;
