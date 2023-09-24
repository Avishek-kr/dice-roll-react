import React, { Component } from 'react'
import Die from './Die'

class RollDice extends Component {
    static defaultProps = {
        diceNumbers:  ['one', 'two', 'three', 'four', 'five', 'six'],
    }
    constructor(props) {
        super(props); 
        this.state = {num1: 'one', num2: 'one', rolling: false};
        this.roll = this.roll.bind(this);    
    }
    roll() {
        const dicesValue1 = this.props.diceNumbers[Math.floor(Math.random() * this.props.diceNumbers.length)];
        const dicesValue2 = this.props.diceNumbers[Math.floor(Math.random() * this.props.diceNumbers.length)];
        this.setState({rolling: true});
        setTimeout(() => {
            this.setState({num1: dicesValue1, num2: dicesValue2})
            this.setState({rolling: false});
        }, 1000)
    }
    render() {
    return (
    <div>
    <h1>Click to Roll the Dice!</h1>
    <div className={`top__content ${this.state.num1 === this.state.num2 ? 'matched': ''}`}>
        <Die state={this.state.num1} rolling={this.state.rolling} />
        <Die state={this.state.num2} rolling={this.state.rolling} />
    </div>
    <div className="bottom__content">
        <button style={{backgroundColor: this.state.rolling ? '#4a4089': 'slateblue' }} disabled={this.state.rolling ? true: false}  onClick={this.roll}>{this.state.rolling ? 'Rolling...': 'Roll Dice!'}</button>
    </div>
    </div>
  )
}
}

export default RollDice