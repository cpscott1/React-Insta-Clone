import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchHeader from './components/SearchBar/SearchHeader';

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
      <SearchHeader />
    </div>
    );
  }
}

export default App;
