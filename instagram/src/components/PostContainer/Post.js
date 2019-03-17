import React from 'react';

const Post = (props) => {
  return (
    <div className='container'>
      <header>
        <div className='thumbnail'>
        <img src={props.post.thumbnailUrl} />
        </div>
        <div className='username'>
        {props.post.username}
        </div>
      </header>
      <div className='picture'>
        <img src={props.post.imageUrl} />
      </div>
    </div>
  )
}

export default Post;
