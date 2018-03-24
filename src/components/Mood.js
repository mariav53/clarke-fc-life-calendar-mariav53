import React, { Component } from 'react';
import Moodboard from './Moodboard';
// import '../App/App.css';
import './Editor.css';
import happy from '../assets/happy.png';
import sad from '../assets/sad.png';
import { Link, Route, Switch } from 'react-router-dom';

class Mood extends Component {
  render() {
    return (
      <div>
        <div className="smiley_container" >
          {this.props.mood === 'happy' ?
            <img className="smiley" src={happy} alt={this.props.mood} title={this.props.date} /> :
            <img className="smiley" src={sad} alt={this.props.mood} title={this.props.date} />
          }
        </div>
        <div className="info_container">
          <p className="info_date">{this.props.date}</p>
          {this.props.message !== ''? <p className="info_message">{this.props.message}</p> : ''}
        </div>
      </div>
    );
  }
}

export default Mood;
