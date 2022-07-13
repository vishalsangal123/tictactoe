import React from 'react'


// const Square = (props) => {
//     // console.log(props);
//     return <button type="button">{props.value}</button>;
// }

// destructing perform bcz value treat as a object then write in this method
const Square = ({value}) => {
    return <button type="button">{value}</button>;
}

export default Square;
