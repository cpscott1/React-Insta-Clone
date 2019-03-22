import React, { Component } from 'react';
import './App.css';
import './components/PostContainer/Post.css';
import './components/CommentSection/Comment.css';
import dummyData from './dummy-data';
import SearchHeader from './components/SearchBar/SearchHeader';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
    state = {
      posts: [],
    filteredPosts: []
    };

componentDidMount() {
  this.setState({
    posts: dummyData,
    filteredPosts: dummyData })
}

searchHandler = (searchterm) => {
  let filtered = this.state.posts.filter(post => {
    return post.includes(searchterm)
  })
  this.setState({
    filteredPosts: filtered
  })
}

render() {
  return (
    <div className="App">
      <SearchHeader onChange={this.searchHandler} />
      <div>
      <PostContainer posts={this.state.filteredPosts}/>
       </div>
    </div>
    );
  }
}

export default App;
