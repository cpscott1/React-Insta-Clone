import React from 'react';

const Post = (props) => {
  const {post} = props
  const {thumbnailUrl, username, imageUrl} = post
  return (
    <div className='container'>
      <header>
        <div className='thumbnail'>
        <img src={thumbnailUrl} />
        </div>
        <div className='username'>
        {username}
        </div>
      </header>
      <div className='picture'>
        <img src={imageUrl} />
      </div>
    </div>
  )
}

export default Post;
