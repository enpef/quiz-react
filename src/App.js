import React, { Component } from 'react';
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
    console.log(total)
  }

  render() {
    const itemlist = this.state.row.map( (row) => {
      return <Input total={this.Total} id={row} key={row} />
    })
    return (
      <div className="App">
        <button type="button" onClick={this.Add} >Add</button> <span id="total">Total : </span>
        {itemlist}
      </div>
    );
  }
}

export default App;
