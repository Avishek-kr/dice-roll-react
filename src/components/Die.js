import React, { Component } from 'react'

class Die extends Component {
    render() {
        console.log(this.props.rolling )
        return (
            <div>
                <i className={`fas fa-dice-${this.props.state} ${this.props.rolling ? 'animating' : ''}`}></i>
            </div>
        )
    }
}

export default Die;