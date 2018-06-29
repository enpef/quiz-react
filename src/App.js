import React, { Component } from 'react';
import styled from 'styled-components';

import Input from './input';

class App extends Component {

  state = {
    row : [0],
    total : 0
  }

  Add = () => {
    const row = this.state.row;
      this.setState({
          row: row.concat(this.state.row.length)
      });
  }

  Total = () => {
    const count = this.state.row
    var total = 0
    for(const i in count){
      if(document.getElementById(i) != null){
        var num = Number(document.getElementById(i).innerHTML)
        total += num
      }
    }
    document.getElementById("total").innerHTML = "Total : " + total
  }

  render() {
    const Button = styled.button`
      border-radius: 3px;
      padding: 0.25em 1em;
      margin: 0 1em;
      background: transparent;
      color: palevioletred;
      border: 2px solid palevioletred;
    `;
    
    const itemlist = this.state.row.map( (row) => {
      return <Input total={this.Total.bind(this)} id={row} key={row} />
    })
    return (
      <div className="App">
        <Button type="button" onClick={this.Add} >Add Row</Button> <span id="total">Total : </span>
        {itemlist}
      </div>
    );
  }
}

export default App;
