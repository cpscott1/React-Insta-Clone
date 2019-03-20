import React, {Component} from 'react';

class CommentForm extends Component {
  state = {
    textInput: ''
  }

  inputHandler = (event) => {
    this.setState({
      textInput: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input type='text'  onChange={this.inputHandler} value={this.state.textInput} placeholder='Add a comment...'/>
      </form>
    )
  }

}

export default CommentForm;
