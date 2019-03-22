import React, {Component} from 'react';

class CommentForm extends Component {
  state = {
    textInput: ''
  }

  inputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.addNewComment('NEW USER', this.state.textInput)
    this.setState({
      textInput: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input type='text'  onChange={this.inputHandler}
          name="textInput"
          value={this.state.textInput} placeholder='Add a comment...'/>
      </form>
    )
  }

}

export default CommentForm;
