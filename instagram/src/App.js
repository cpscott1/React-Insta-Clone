import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import './App.css';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData
    };
}

render() {
  return (
    <div className="App">
      {this.state.dummyData.map( post => {
        return (
          <PostContainer />
        )
      })}
    </div>
    );
  }
}

export default App;
