import React, { Component } from 'react';
import './App.css';
import './components/PostContainer/Post.css';
import dummyData from './dummy-data';
import SearchHeader from './components/SearchBar/SearchHeader';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
    state = {
      posts: []
    };

componentDidMount() {
  this.setState({ posts: dummyData })
}


render() {
  return (
    <div className="App">
      <SearchHeader />
      <div>
      {this.state.posts.map((post, username) => {
        return (
         <PostContainer
          post={post}
          key={username}
         />
          )
      })}
       </div>
    </div>
    );
  }
}

export default App;
