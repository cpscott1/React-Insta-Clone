import React from 'react';
import FeatherIcon from 'feather-icons-react';

const Post = (props) => {
  const {post} = props
  const {thumbnailUrl, username, imageUrl, likes} = post
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
      <footer>
        <div className='icons'>
          <FeatherIcon icon='heart' />
          <FeatherIcon icon='message-circle' />
        </div>
        <div className='likes'>
        {likes} likes
        </div>
      </footer>
    </div>
  )
}

export default Post;
