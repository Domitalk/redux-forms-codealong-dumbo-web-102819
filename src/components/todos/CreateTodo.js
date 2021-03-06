import React, { Component } from 'react'
import { connect } from 'react-redux'; 

class CreateTodo extends Component {
  constructor () {
    super(); 
    this.state  ={
      text: '', 
    }
  }
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault(); 
    this.props.addTodo(this.state)
  }
  // alternatively if we leave connect args blank we can always manually call dispatch
  // handleSubmit = event => {
    // event.preventDefault(); 
    // this.props.dispatch({ type: 'ADD_TODO', playload: this.state })
  // }
  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}> 
          <p>
            <label>add todo</label>
            <input value={this.state.text} type="text" onChange={this.handleChange} />
          </p>
          <input type="submit" /> 
        </form>
        {this.state.text} 
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return { 
    addTodo: (formData) => dispatch({
      type: 'ADD_TODO', 
      payload: formData
    })
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo) ;
