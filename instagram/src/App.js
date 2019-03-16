import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchHeader from './components/SearchBar/SearchHeader';

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
      {this.state.posts.map(post => {
        return (
         <div>Post</div>
          )
      })}
       </div>
    </div>
    );
  }
}

export default App;
