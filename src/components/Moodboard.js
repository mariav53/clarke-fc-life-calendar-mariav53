import React, { Component } from 'react';
import Moodboard from './Moodboard';
import '../App/App.css';
import happy from '../assets/happy.png';
import sad from '../assets/sad.png';

class Editor extends Component {
  constructor(props){
    super(props);
    this.state={

      moods: []

    }
  }

  render() {
     const moods = this.props.moods;
    return (
      <div className="calendario">
        <h2>Calendario</h2>
        <div className="mood_board">
          <ul className="mood_list">
            {moods.map((mood, index) =>
              <li className="mood_item" key={index} >
                {mood==='happy' ? <img src={happy} /> : <img src={sad} />}
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Editor;
