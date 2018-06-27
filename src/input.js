import React, { Component } from 'react';
import TextField from "./textfield";
import Result from './result';

class Input extends Component {

  state = {
    input1 : "",
    input2 : "",
    count : 0
  }
  
  updateinput1 = (evt) => {
    this.setState({
      input1: evt.target.value
    })
  }

  updateinput2 = (evt) => {
    this.setState({
      input2: evt.target.value
    })
  }

  render() {
    if ((this.state.input1 === "" && this.state.input2 === "") || this.state.input1 === "" || this.state.input2 === "") {
        return (
        <div>
          <TextField input={this.updateinput1} /> x <TextField input={this.updateinput2}/> = 
        </div>
      )
    }
    else{
        return (
        <div>
          <TextField input={this.updateinput1} /> x <TextField input={this.updateinput2}/> = <Result input1={this.state.input1} input2={this.state.input2} />
        </div>
      )
    }
  }
}

export default Input;