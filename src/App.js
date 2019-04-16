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
      current: 'mail'
    }
  }


  undisplayCountdown = () => {
    console.log("Xoa Countdown thanh cong")
    this.setState({ displayCountdown: false }, () => {
      this.audioRef.play();
    })
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
          <audio ref={(input) => { this.audioRef = input }}>
            <source src={require('./Mp3/999-Doa-Hoa-Hong.mp3')} type="audio/mpeg"></source>
          </audio>
          <div className="dateTime">
            <input onChange={value => this.get(value)} type="datetime-local" name="alarm" />
            <button onClick={this.showCountdown}>
              <b>Set Alarm</b> 
            </button>

            {/* Set this correspond to the alarm time set by users in timeInput*/}
            {/* showCountdown is to display the countdown timer when click on the "Submit" button */}
            {/* This button is set to input local date and time correspond to your computer format */}
          </div>
          <div>
          <select className="dropDown">
            <option value="khabanh">999 Doa Hoa Hong</option>
            <option value="vitas">Vitas 7th Element</option>
            <option value="kiki">Umi no Mieru Machi</option>
          </select>
          </div>
        </div>


        <h3 className="title">You have this much to sleep !</h3>

        {
          this.state.displayCountdown &&
          <Countdown date={this.state.timeInput} xoaCount={this.undisplayCountdown} />
        }
        {/* This is the code to render Countdown timer when clicking the Submit Button */}

      </div >
    );
  }
}


export default App;
