import React, { Component } from 'react';

class App extends Component {
  state = {
    input1 : "",
    input2 : ""
  }
  
  updateinput1 = (evt) => {
    console.log(this.state.input1)
    this.setState({
      input1 : evt.target.value,
      result : this.state.input1*this.state.input2
    })
  }

  updateinput2 = (evt) => {
    this.setState({
      input2 : evt.target.value,
      result : this.state.input1*this.state.input2
    })

  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.updateinput1} /> x <input type="text" onChange={this.updateinput2}/> = {this.state.input1*this.state.input2}
      </div>
    );
  }
}

export default App;
