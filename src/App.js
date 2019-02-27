import React, { Component } from 'react';
import Countdown from './Countdown.js';
import Date from './Date.js';
import logo from './logo.svg';
import './App.css';



class Time extends Component {
  constructor(props) {
    super(props)
    this.state = { time: new Date() }
    
  }
  componentDidMount() {
  this.interval =   setInterval(() => {
     this.setState({time:new Date()})
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
  render() {
    const currentDate = new Date();
    const year = (currentDate.getMonth() === 11 && currentDate.getDate()) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2></h2>
        </div>
        <Time/>

        <h3 className="title">You have this much to sleep !</h3>
        <Countdown date={`${year}-2-29T00:00:00`} />
        {/* Set this correspond to the alarm time set by users */}
      </div>
    );
  }
}

export default App;
