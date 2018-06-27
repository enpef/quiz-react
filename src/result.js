import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
      <span>{this.props.input1*this.props.input2}</span>
    )
  }
}

export default Result