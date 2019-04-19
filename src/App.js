import React, { Component } from 'react';
import Amount from './components/amount';
import Attach from './components/attach';
import Button from './components/button';
import CalendarInput from './components/calendarInput';
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
            <Amount />
          </div>
          <br />
          <div>
            <Attach />
          </div>
          <br />
          <div>
            <Button />
          </div>
          <br />
          <div>
            <CalendarInput />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
