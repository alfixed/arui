import React, { Component } from 'react';
import AmountClass from './components/amount'
import AttachClass from './components/attach'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-div">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
          <div>
            <AmountClass />
          </div>
          <br />
          <div>
            <AttachClass />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
