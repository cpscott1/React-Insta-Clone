import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

const CommentSection = (props) => {
  const {comments} = props;
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


export default CommentSection;
