import React, { Component } from 'react';
import Countdown from './Countdown.js';
import DDate from './Date.js';
import logo from './logo.svg';
import './App.css';
import Alarmbutton from './Alarmbutton';


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
      <h1>
        {this.state.time.toLocaleTimeString()}
      </h1>
    )
  }
}


function get(dataInput) {

  console.log(dataInput.target.value)
}


class App extends Component {
  state = {
    displayCountdown: false

  }

  showCountdown() {
    this.setState({ displayCountdown: true })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <DDate />
          <Time />
          <div className="btn_submit">
            Set alarm : <input onChange={value => get(value)} type="datetime-local" name="alarm" />

            <Alarmbutton hienCountdown={this.showCountdown.bind(this)} />
          </div>
        </div>

        <h3 className="title">You have this much to sleep !</h3>

        {
          this.state.displayCountdown &&
          <Countdown />
        }
        {/* Set this correspond to the alarm time set by users */}
      </div>
    );
  }
}


export default App;
