import React, { Component } from 'react';
import Moodboard from './Moodboard';
// import '../App/App.css';
import './Editor.css';
import happy from '../assets/happy.png';
import sad from '../assets/sad.png';

class Editor extends Component {
  constructor(props){
    super(props);
    this.state={
      dates: [],
      moods: [],
      isLoading : true,
        hover: false
    }
  }

  componentWillUpdate(){
    const moods = this.state.moods;
    const dates = this.state.dates;
    localStorage.setItem('moods', JSON.stringify(moods) );
    localStorage.setItem('dates', JSON.stringify(dates) );
  }

  componentWillMount(){
    localStorage.getItem('moods') && localStorage.getItem('dates') && this.setState ({
      moods: JSON.parse(localStorage.getItem('moods')),
      dates: JSON.parse(localStorage.getItem('dates')),
      isLoading : false
    });
  }
  addMood(e){
    e.preventDefault();
    const valueMood = document.querySelector('input[name="mood"]:checked').value;
    const valueDate = document.querySelector('#date').value;
    let moods = this.state.moods;
    let dates = this.state.dates;
    moods.push(valueMood)
    dates.push(valueDate)
    this.setState({
      moods:moods,
      dates:dates,
    });
    console.log(this.state.moods);
  }

  handleMouseIn() {
    this.setState({ hover: true })
  }

  handleMouseOut() {
    this.setState({ hover: false })
  }

  render() {
    let moods = this.state.moods;
    let dates = this.state.dates;
    const tooltipStyle = {
      display: this.state.hover ? 'block' : 'none'
    }

    return (
      <div className="app__container">
        <div className="editor__container">
          <h2 className="container_title">Editor</h2>
          <form>
            <p className="label">Fecha</p>
            <input type="date" id="date" />
            <p className="label">Estado</p>
            <div className="mood_section">
              <label htmlFor="happy"><input type="radio" value="happy" id="happy" name="mood"/>:)</label>
              <label htmlFor="sad"><input type="radio" value="sad" id="sad" name="mood"/>:(</label>
            </div>
            <p className="label">Mensaje</p>
            <input type="text" id="message" />
            <button type="submit" id="addMoodBtn" onClick={(e) => this.addMood(e)}>Guardar</button>
          </form>
        </div>
        <div className="moodboard__container">
          <h2 className="container_title">Calendario</h2>
          <div className="moodboard">
            <ul className="mood_list">
              {moods.map((mood, index) =>
                <li className="mood_item" key={index} onMouseOver={() => this.handleMouseIn()} onMouseOut={()=>this.handleMouseOut()} >
                  {mood==='happy' ? <img src={happy} className="smiley" /> : <img src={sad} className="smiley" />}
                  <div style={tooltipStyle}>{dates[index]}</div>

                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

    );
  }
}

export default Editor;
