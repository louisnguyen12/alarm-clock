import React, { Component } from 'react';
import Countdown from './Countdown.js';
import DDate from './Date.js';
import logo from './logo.svg';
import './App.css';
import Alarmbutton from './Alarmbutton';
import { parse } from 'querystring';


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
      displayCountdown: false,
      timeInput: '',
    }
    this.cleanCount = React.createRef()
  }


  showCountdown =()=> {
    this.setState({ displayCountdown: true })
  }

  get(dataInput) {
    console.log(dataInput.target.value)
    this.setState({ timeInput: dataInput.target.value })
    // this.cleanCount.current.stop()
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <DDate />
          <Time />
          <div className="btn_submit">
            Set alarm : <input onChange={value => this.get(value)} type="datetime-local" name="alarm" />
            <button onClick={this.showCountdown}style={{ marginLeft: 15 }}>
             Submit
            </button>
            
          </div>
        </div>

        <h3 className="title">You have this much to sleep !</h3>

        {
          this.state.displayCountdown &&
          <Countdown date={this.state.timeInput} />
        }
        {/* Set this correspond to the alarm time set by users */}
      </div>
    );
  }
}


export default App;
