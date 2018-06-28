import React, { Component } from 'react';

class Result extends Component {

  componentDidUpdate(prevProps,nextProps) {
    if(this.props.total) {
      this.props.total()
    }
  }

  render() {
    if(this.props.input1 && this.props.input2 != null) {
      return (
        <span id={this.props.id}>{this.props.input1*this.props.input2}</span>
      )
    }
    else {
      return (
        <span id={this.props.id}></span>
      )
    }

  }
}

export default Result