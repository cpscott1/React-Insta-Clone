import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';


class PostContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      filteredPosts: []
    }
  }

  render() {
    return (
      this.props.posts.map((post) => {
        return (
         <Post post={post}/>
          )
      })
    )

  }
}
PostContainer.propTypes = {
  post: PropTypes.object
}

PostContainer.defaultProps = {
  post: {}
}

export default PostContainer;
