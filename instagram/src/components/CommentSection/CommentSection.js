import React, {Component} from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentSection extends Component {
  constructor(props){
    super(props);
  this.state = {
    addComments: '',
    comments: this.props.comments
  }
}

  addNewComment = (event, index) => {
    const newComments = this.state.comments.map(newcomment => {
      return newcomment
    })
    const item = {
      username: 'billie',
      text: 'pepperoni'
    }
    newComments.push(item)
    this.setState({comments: newComments})
  }

  render() {
    const {comments} = this.state;
  return (
    <div className='comment-container'>
    <button onClick={this.addNewComment}>Text</button>
      {comments.map((comment, username) => {
        return (
          <Comment key={username} comment={comment}/>
        )
      })}
      <CommentForm />
    </div>
  )
}
}


export default CommentSection;
