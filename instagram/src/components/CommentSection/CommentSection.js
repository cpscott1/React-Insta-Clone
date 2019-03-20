import React from 'react';
import Comment from './Comment';

const CommentSection = (props) => {
  const {comments} = props;
  return (
    <div className='comment-container'>
      {comments.map((comment, username) => {
        return (
          <Comment key={username} comment={comment}/>
        )
      })}
    
    </div>
  )
}


export default CommentSection;
