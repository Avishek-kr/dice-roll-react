import React, { Component } from 'react'
import Die from './Die'

class RollDice extends Component {
    static defaultProps = {
            diceNumbers:  ['one', 'two', 'three', 'four', 'five', 'six'],
        }
    render() {
        
        console.log(this.props.diceNumbers)
        return (
        <div>
            <Die />
            <Die />
        </div>
  )
}
}

export default RollDice