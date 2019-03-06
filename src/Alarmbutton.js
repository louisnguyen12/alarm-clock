import React, { Component } from 'react';

class Alarmbutton extends Component {
    constructor(props) {
        super(props)
        this.state = { startCountdown: true };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(state => ({
            startCountdown: !state.startCountdown
        }))
        this.props.hienCountdown()
    }

    render() {
        return (

            <button onClick={this.handleClick} style={{ marginLeft: 15 }}>
                {this.state.startCountdown ? 'Submit' : 'Submit'}
            </button>

        )
    }
}
export default Alarmbutton;        