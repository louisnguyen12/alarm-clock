import React, { Component } from 'react';
import Countdown from './Countdown.js';
import DDate from './Date.js';
// import logo from './logo.svg';
import './App.css';
// import { parse } from 'querystring';


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



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayCountdown: false, // This state was set to be called again in showCountdown
      timeInput: '',
    }

  }

  undisplayCountdown = () => {
    console.log("Xoa Countdown thanh cong")
    this.setState({ displayCountdown: false })
  }

  // This function hides the Countdown timer

  showCountdown = () => {
    this.setState({ displayCountdown: true })
  }
  // This function makes clicking Submit button shows the Countdown timer


  get(dataInput) {
    console.log(dataInput.target.value)
    this.setState({ timeInput: dataInput.target.value })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <DDate />
          <Time />
          <div className="btn_submit">
            Set alarm : <input onChange={value => this.get(value)} type="datetime-local" name="alarm" />
            <button onClick={this.showCountdown} style={{ marginLeft: 15 }}>
              Submit
            </button>
            {/* Set this correspond to the alarm time set by users in timeInput*/}
            {/* showCountdown is to display the countdown timer when click on the "Submit" button */}
            {/* This button is set to input local date and time correspond to your computer format */}
          </div>
        </div>

        <h3 className="title">You have this much to sleep !</h3>

        {
          this.state.displayCountdown &&
          <Countdown date={this.state.timeInput} xoaCount={this.undisplayCountdown} />
        }

      </div>
    );
  }
}


export default App;
