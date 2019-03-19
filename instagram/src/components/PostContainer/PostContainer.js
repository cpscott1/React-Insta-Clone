import React from 'react';
import Post from './Post';

const PostContainer = (props) => {
  const {post} = props
  return <Post post={post}/>
}

export default PostContainer;
