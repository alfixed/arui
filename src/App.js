import React, { Component } from 'react';
import Amount from './components/amount';
import Attach from './components/attach';
import Button from './components/button';
import Calendar from './components/calendar';
import CalendarInput from './components/calendarInput';
import CardInput from './components/cardInput';
import CheckBoxGroup from './components/checkBoxGroup';
import CheckBox from './components/checkBox';
import Collapse from './components/collapse';
import Dropdown from './components/dropdown';
import EmailInput from './components/emailInput';
import FlagIcon from './components/flagIcon';
import FormField from './components/formField';
import Form from './components/form';
import GridCol from './components/gridCol';
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
            <div>
              <Attach />
            </div>
            <div>
              <Button />
            </div>
            <div>
              <CalendarInput />
            </div>
            <div>
              <Calendar />
            </div>
            <div>
              <CardInput />
            </div>
            <div>
              <CheckBoxGroup />
            </div>
            <div>
              <CheckBox />
            </div>
            <div>
              <Collapse />
            </div>
            <div>
              <Dropdown />
            </div>
            <div>
              <EmailInput />
            </div>
            <div>
              <FlagIcon />
            </div>
            <div>
              <FormField />
            </div>
            <div>
              <Form />
            </div>
            <div>
              <GridCol />
            </div>
        </header>
      </div>
    );
  }
}

export default App;
