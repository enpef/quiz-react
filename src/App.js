import React, { Component } from 'react';
import styled from 'styled-components';
import "./App.css";

import Input from './input';
import Total from './total';

class App extends Component {

  state = {
    row : [0],
    total : "",
    Result : []
  }

  Set_total = (total) => {
    this.setState({
      total: total
    })
  }

  Add = () => {
    const row = this.state.row;
      this.setState({
          row: row.concat(this.state.row.length)
      });
  }

  Total = (result, id) => {
    const count = this.state.row
    let total = ""
    const Result = this.state.Result
    Result[id] = result
    for(const i in count){
      if(Result[i]){
        total = Number(total)+Result[i]
      }
    }
    return total
 }
 
  render() {
    const Button = styled.button`
      border-radius: 3px;
      padding: 0.25em 1em;
      margin: 0 1em;
      background: #e6e6e6;
      color: #737373;
      border: 2px solid #737373;
    `;

    const itemlist = this.state.row.map( (row) => {
      return <Input total={this.Total.bind(this)} id={row} key={row} state={this.state} set_total={this.Set_total.bind(this)} />
    })
    return (
      <div className="App">
        <Button type="button" onClick={this.Add} >Add Row</Button> <Total total={this.state.total} />
        <div className="App-row">
          {itemlist}
        </div>
      </div>
    );
  }
}

export default App;
