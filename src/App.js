import React, { Component } from 'react';
import Charts from './Components/Charts'
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
          </div>>
      </div>
    );
  }
}

export default App;
