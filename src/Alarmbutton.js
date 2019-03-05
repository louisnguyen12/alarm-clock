import React, { Component } from 'react';

class Alarmbutton extends Component {
    constructor(props) {
        super(props)
        this.state = { isSet: true };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(state => ({
            isSet: !state.isSet
        }))
        this.props.hienCountdown()
    }

    render() {
        return (

            <button onClick={this.handleClick} style={{ marginLeft: 15 }}>
                {this.state.isSet ? 'Submit' : 'Submit'}
            </button>

        )
    }
}
export default Alarmbutton;        