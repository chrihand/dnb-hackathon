import React, { Component } from 'react';
import './App.css';
import Instagram from './instagram.js';
import User from './user.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Instagram/>
          <User/>
        </div>
      </div>
    );
  }
}

export default App;


1031832805
