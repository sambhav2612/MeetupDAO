import React, { Component } from 'react';
import TopNavigator from './components/navigation/TopNavigator';
import JoinDAOForm from './components/navigation/JoinDAOForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavigator />
        <div class="container">
          <JoinDAOForm name='join'/>
        </div>
      </div>
    );
  }
}

export default App;
