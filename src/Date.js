import React, { Component } from 'react';

class Date extends Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
        
      }
      
      render() {
        
        return (
          <h1>
            {this.state.date.toLocaleDateString()}
          </h1>
        )
      }
    }
export default Date;    