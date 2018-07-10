import React, { Component } from 'react';

class Result extends Component {

  state = {
    total: ""
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.input1 && nextProps.input2 && (nextProps.input1 !== this.props.input1 || nextProps.input2 !== this.props.input2)){
      const result = nextProps.input1*nextProps.input2
      const id = nextProps.id
      let total = nextProps.total(result, id)
      this.props.set_total(total)
    }
  }

  render() {
    if(this.props.input1 && this.props.input2 != null) {
      return (
        <span>{this.props.input1*this.props.input2}</span>
      )
    }
    else {
      return (
        <span></span>
      )
    }

  }
}

export default Result