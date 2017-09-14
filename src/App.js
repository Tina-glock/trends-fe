import React, { Component } from 'react';
import Charts from './Components/Charts';
import Search from './Components/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to trends</h2>
        </div>
          <div>
              <Charts />
              <Search />
          </div>
      </div>
    );
  }
}

export default App;
