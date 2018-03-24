import React, { Component } from 'react';
import Mood from './Mood';
import '../App/App.css';
import happy from '../assets/happy.png';
import sad from '../assets/sad.png';

class Moodboard extends Component {
  render() {
    return (
      <div className="calendario">
        <h2>Moodboard</h2>
        <div className="mood_board">
          <ul className="mood_list">
            {this.props.allMoodData.sort(function(a,b) {
              return new Date(a.date) - new Date(b.date);}).map((data) =>
                <li className="mood_item" key={data.date}>
                  <Mood
                    date={data.date}
                    mood={data.mood}
                    message= {data.message}
                  />
                </li>
              )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Moodboard;
