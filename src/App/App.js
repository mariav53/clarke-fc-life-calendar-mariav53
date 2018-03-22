import React, { Component } from 'react';
import './App.css';
import Editor from '../components/Editor';
import Moodboard from '../components/Moodboard';
import { Link, Route, Switch } from 'react-router-dom';


import happy from '../assets/happy.png';
import sad from '../assets/sad.png';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <div className="topBlock"></div>
          <h1>¿Qué tal ha ido tu día?</h1>
          <div className="bottomBlock"></div>
          <Link to='/editor'>
            <button className="addBtn">+</button>
          </Link>
        </header>
        <main className="main">

          <Switch>
            <Route  path='/editor' component={ Editor} />
          </Switch>
        </main>
      </div>
    );
  }

}

export default App;
