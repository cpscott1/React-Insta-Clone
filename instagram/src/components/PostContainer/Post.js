import React from 'react';
import FeatherIcon from 'feather-icons-react';
import CommentSection from '../CommentSection/CommentSection';
const Post = (props) => {
  const {post} = props
  const {thumbnailUrl, username, imageUrl, likes, comments} = post
  return (
    <div className='container'>
      <header>
        <div className='thumbnail'>
        <img src={thumbnailUrl} alt="thumbnail" />
        </div>
        <div className='username'>
        {username}
        </div>
      </header>
      <div className='picture'>
        <img src={imageUrl} alt="pic" />
      </div>
      <footer>
        <div className='icons'>
          <FeatherIcon icon='heart' />
          <FeatherIcon icon='message-circle' />
        </div>
        <div className='likes'>
          {likes} likes
        </div>
        <CommentSection
          username={username}
          comments={comments}
        />
      </footer>
    </div>
  )
}

export default Post;
