import React, { Component } from 'react';
import Mood from './Mood';
import './Moodboard.css';
import { Link } from 'react-router-dom';

class Moodboard extends Component {
  render() {
    return (
      <div>
        <div className="link">
          <Link to='/editor'>
            <button className="addBtn">+</button>
          </Link>
        </div>
        <div className="moodboard__container">
          <h2 className="container__title">Moodboard</h2>
          <div className="moodboard">
            <ul className="mood__list">
              {this.props.allMoodData.sort((a,b) => a.date - b.date).map((data) =>
                  <li className="mood__item" key={data.date}>
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
      </div>
    );
  }
}
export default Moodboard;
