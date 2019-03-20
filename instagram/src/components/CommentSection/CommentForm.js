import React, {Component} from 'react';

class CommentForm extends Component {
  state = {
    textInput: ''
  }

  inputHandler = (event) => {
    event.preventDefault()
    this.setState({
      textInput: event.target.value
    })
  }

  render() {
    return (
      <form>
        <input type='text' onChange={this.inputHandler} placeholder='Add a comment...'/>
      </form>
    )
  }

}

export default CommentForm;
