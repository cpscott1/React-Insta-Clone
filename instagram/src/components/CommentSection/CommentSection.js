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

  addNewComment = (username, text) => {
    const comment = {username: username, text: text}
    this.setState({comments: [...this.state.comments, comment]})
  }

  render() {
  return (
    <div className='comment-container'>
      {this.state.comments.map((comment, index) => {
        return (
          <Comment key={index} comment={comment}/>
        )
      })}
      <CommentForm addNewComment={this.addNewComment} />
    </div>
  )
}
}


export default CommentSection;
