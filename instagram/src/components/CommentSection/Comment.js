import React from 'react';

const Comment = (props) => {
  const {comment} = props
  const {username, text} = comment
  return (
    <div className='comment-description'>
      <div className='comment-username'>
        {username}
      </div>
      <div className='comment-text'>
        {text}
      </div>
    </div>
  )
}

export default Comment;
