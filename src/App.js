import React, { Component } from 'react';
import Countdown from './Countdown.js';
import DDate from './Date.js';
import Time from './Time.js';
import './App.css';






class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayCountdown: false,
      timeInput: '',
      errors: {},
      current: 'mail'
    }
  }

  undisplayCountdown = () => {
    console.log("Xoa Countdown thanh cong")
    this.setState({ displayCountdown: false })
  }
  // This function hides the Countdown timer

  showCountdown = () => {

    if (this.state.timeInput.length > 0) {
      this.setState({ displayCountdown: true })
    }
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
        <h1>Online Alarm Clock</h1>
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
        {/* This is the code to render Countdown timer when clicking the Submit Button */}

      </div>
    );
  }
}


export default App;
