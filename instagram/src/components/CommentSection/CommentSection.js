import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

const CommentSection = (props) => {
  const {username, comments} = props;
  return (
    <div className='comment-container'>
      {comments.map((comment, username) => {
        return (
          <Comment key={username} comment={comment}/>
        )
      })}
      <CommentForm onSubmitComment={(username, textInput)}/>
    </div>
  )
}


export default CommentSection;
