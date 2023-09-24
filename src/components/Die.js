import React, { Component } from 'react'

class Die extends Component {
    render() {
        return (
            <div>
                <i className={`fas fa-dice-one`}></i>
            </div>
        )
    }
}

// const Die = () => {
//     const array = ['one', 'two', 'three', 'four', 'five', 'six'];
//   return (
//     <div>
//         <i className={`fas fa-dice-${array[Math.floor(Math.random() * array.length)]}`}></i>
//     </div>
//   )
// }

export default Die