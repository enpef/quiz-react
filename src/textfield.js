import React, { Component } from "react";

class TextField extends Component {
  render () {
    return (
      <input type="text" onChange={this.props.input} />
    )
  }
}

export default TextField