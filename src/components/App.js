import React, { Component } from 'react';

import '../App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      date: '',
      dates: [],
      moods: [],

      isLoading : true
    }
  }

  componentWillUpdate(){
    // const dates = this.state.dates;
    // localStorage.setItem('dates', JSON.stringify(dates) );
    const moods = this.state.moods;
    localStorage.setItem('moods', JSON.stringify(moods) );
  }

  componentWillMount(){
    localStorage.getItem('moods') && this.setState ({
      moods: JSON.parse(localStorage.getItem('moods')),
      isLoading : false
    });
    // localStorage.getItem('dates') && this.setState ({
    //   dates: JSON.parse(localStorage.getItem('dates')),
    //   isLoading : false
    // });
  }

  addMood(e){
    e.preventDefault();
    // const valueDate = document.getElementById('date').value;
    // let dates = this.state.dates;
    // dates.push(valueDate)
    const valueMood = document.querySelector('input[name="mood"]:checked').value;
    let moods = this.state.moods;
    moods.push(valueMood)
     this.setState({
      // dates: dates,
      moods:moods
    });
    console.log(this.state.moods);
  }
  printMoods(){
    const moods = this.state.moods;
    return(
      <ul className="mood_list">
        {moods.map((mood, index) => //se ordenan los resultados por id
          <li className="mood_item" key={index} >
            {mood}
          </li>
        )}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <header>
          <h1>¿Qué tal ha ido tu día?</h1>
        </header>
        <div className="formulario">
          <h2>Editor</h2>
          <form>
            <label htmlFor="date">Fecha</label>
            <input type="date" id="date" />
            <label>Estado</label>
            <div className="mood_section">
              <label htmlFor="happy"><input type="radio" value="happy" id="happy" name="mood"/>:)</label>
              <label htmlFor="sad"><input type="radio" value="sad" id="sad" name="mood"/>:(</label>
            </div>
            <label htmlFor="message">Mensaje</label>
            <input type="text" id="message" />
            <button type="submit" onClick={(e) => this.addMood(e)}>Guardar</button>
          </form>
        </div>
        <div className="calendario">
          <h2>Calendario</h2>
          <div className="mood_board">
            {this.printMoods()}
          </div>
        </div>
      </div>
    );
  }
}


// mood_board donde se guadaran la info
export default App;
