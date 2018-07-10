import React, { Component } from 'react'

class Total extends Component {
  state = {
    total: ""
  }
  render() {
    return (
      <span id="total">Total : {this.props.total}</span>
    )
  }
}

export default Total