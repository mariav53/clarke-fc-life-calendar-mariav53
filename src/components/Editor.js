import React, { Component } from 'react';
import './Editor.css';
import { Link } from 'react-router-dom';

class Editor extends Component {
  render() {
    return (
      <div className="editor__container">
        <h2 className="container__title">Editor</h2>
        <form>
          <p className="label">Fecha</p>
          <input className="input__date" id="date" type="date" onChange={this.props.handleDate}/>
          <p className="label">Estado</p>
          <div className="mood__section">
            <label htmlFor="happy"><input type="radio" value="happy" id="happy" name="mood" onClick={this.props.handleMood}/>:)</label>
            <label htmlFor="sad"><input type="radio" value="sad" id="sad" name="mood" onClick={this.props.handleMood}/>:(</label>
          </div>
          <div className={`message ${ this.props.mood === 'happy'? 'visible' : 'hidden' }`}>
            <label className="label">
              Mensaje:
            </label>
            <input className="input__text" type="text" id="message" onChange={this.props.handleMessage}/>
          </div>
          <div className="btn__section">
            <Link to='/'>
              <button className="send__button" id="addMoodBtn" type="submit" onClick={this.props.handleClickAddMood}>Guardar</button>
            </Link>
            <Link to='/'>
              <button className="cancel__button" id="cancelBtn" type="submit">Cancelar</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Editor;
