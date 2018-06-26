import React, { Component } from 'react';
import Input from './input';

class App extends Component {

  state = {
    row : [],
    row_count : 0
  }

  Add = () => {
    const row = this.state.row;
      this.setState({
          row: row.concat(this.state.row_count+1),
          row_count: this.state.row_count+1
      });
  }

  render() {

    const itemlist = this.state.row.map( (row) => {
      return <Input key={row} />
    })
    return (
      <div className="App">
        <button type="button" onClick={this.Add} >Add</button>
        <Input />
        {itemlist}
      </div>
    );
  }
}

export default App;
