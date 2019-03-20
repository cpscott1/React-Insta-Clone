import React from 'react';
import FeatherIcon from 'feather-icons-react';
import CommentSection from '../CommentSection/CommentSection';

class Post extends React.Component {
  state = {
    count: 0
  }


incrementCount = () => {
  this.setState(prevState => {
    return { count: prevState.count + 1 }
  })
}


  render() {
  const {post} = this.props
  const {count} = this.state
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
        <div className='icons' onClick={this.incrementCount}>
          <FeatherIcon icon='heart'  />
          <FeatherIcon icon='message-circle' />
        </div>
        <div className='likes'>
          {likes + count} likes
        </div>
        <CommentSection
          username={username}
          comments={comments}
        />
      </footer>
    </div>
  )
}
}

export default Post;
