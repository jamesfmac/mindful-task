import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import TaskList from './components/TaskList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React or something</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <br/>
        <TaskList/> 
        
      </div>
    );
  }
}

export default App;

