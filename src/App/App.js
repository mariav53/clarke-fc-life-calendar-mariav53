import React, { Component } from 'react';
import Editor from '../components/Editor';
import Moodboard from '../components/Moodboard';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: '',
      mood: '',
      message: '',
      allMoodData :[]
    }
  }
  componentWillUpdate(nextPorps, nextState){
    localStorage.setItem('allMoodData', JSON.stringify(nextState.allMoodData));
  }
  componentWillMount(nextPorps, nextState){
    localStorage.getItem('allMoodData') && this.setState ({
      allMoodData: JSON.parse(localStorage.getItem('allMoodData')),
    });
  }
  handleAddDate (e) {
    this.setState({
      date: e.target.value
    })
  }
  handleAddMood (e) {
    this.setState({
      mood: e.target.value
    })
  }
  handleAddMessage (e) {
    this.setState({
      message: e.target.value
    })
  }
  addMood(e){
    const mood =this.state.mood;
    const date =this.state.date;
    const message =this.state.message;
    this.setState({
      allMoodData:[...this.state.allMoodData, {mood, date, message}]
    });
  }

  render() {
    return (
      <div className="app">
        <header className="header">
          {/* <div className="topBlock"></div> */}
          <h1>¿Qué tal ha ido tu día?</h1>
          {/* <div className="bottomBlock"></div> */}
          {/* <Link to='/editor'>
            <button className="addBtn">+</button>
          </Link> */}
        </header>
        <main className="main">
          <Switch>
            <Route exact path='/' render = {(props) =>
              <Moodboard
                allMoodData={this.state.allMoodData}/>} />
            <Route path='/editor' render = {(props) =>
              <Editor
                date = {this.state.date}
                mood = {this.state.mood}
                message = {this.state.message}
                handleMood={(e) => this.handleAddMood(e)}
                handleMessage={(e) => this.handleAddMessage(e)}
                handleDate={(e) => this.handleAddDate(e)}
                handleClickAddMood={(e) => this.addMood(e)}/>}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
