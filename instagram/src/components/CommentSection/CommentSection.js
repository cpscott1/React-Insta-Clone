import React, {Component} from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentSection extends Component {
  state = {
    addComments: ''
  }


  addNewComment = (event, index) => {
    this.setState(prevState => {
      return { addComments: event.target.value}
    })
  }

  render() {
    const {comments} = this.props;
  return (
    <div className='comment-container'>
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
