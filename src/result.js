import React, { Component } from 'react';

class Result extends Component {
  render() {
    if(this.props.input1 && this.props.input2 != null) {
      return (
        <span onChange={this.props.total} id={this.props.id}>{this.props.input1*this.props.input2}</span>
      )
    }
    else {
      return (
        <span onChange={this.props.total} id={this.props.id}></span>
      )
    }

  }
}

export default Result