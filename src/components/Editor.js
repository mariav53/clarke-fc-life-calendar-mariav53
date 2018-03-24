import React, { Component } from 'react';
// import '../App/App.css';
import './Editor.css';
import happy from '../assets/happy.png';
import sad from '../assets/sad.png';
import { Link } from 'react-router-dom';

class Editor extends Component {
  render() {
    return (
      <div className="app__container">
        <div className="editor__container">
          <h2 className="container_title">Editor</h2>

          <form>
            <p className="label">Fecha</p>
            <input className="input-text" type="date" onChange={this.props.handleDate}/>
            <p className="label">Estado</p>
            <div className="mood_section">
              <label htmlFor="happy"><input type="radio" value="happy" id="happy" name="mood" onClick={this.props.handleMood}/>:)</label>
              <label htmlFor="sad"><input type="radio" value="sad" id="sad" name="mood" onClick={this.props.handleMood}/>:(</label>
            </div>
            <div className={`${ this.props.mood === 'happy'? 'visible' : 'hidden' }`}>
              <label className="label">
                Mensaje:
              </label>
              <input className="input-text" type="text" id="message" onChange={this.props.handleMessage}/>
            </div>
            <Link to='/'>
              <button className="send-button" id="addMoodBtn" type="submit" onClick={this.props.handleClickAddMood}>Guardar</button>
            </Link>
          </form>

        </div>
      </div>
    );
  }
}

export default Editor;
