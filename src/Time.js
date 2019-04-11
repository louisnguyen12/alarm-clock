import React, { Component } from 'react';

class Time extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: new Date(),
        }

    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ time: new Date() })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }
    render() {

        return (
            <h2>
                {this.state.time.toLocaleTimeString()}
            </h2>
        )
    }
}

export default Time;