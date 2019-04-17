import React, { Component } from 'react';
import './App.css';
import { Cnn } from './services/cnn/Cnn';
import { Requester } from './services/common/Requester';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cnn requester={new Requester()} />
      </div>
    );
  }
}

export default App;
