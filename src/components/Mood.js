import React, { Component } from 'react';
import './Mood.css';
import happy from '../assets/happy.png';
import sad from '../assets/sad.png';

class Mood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowing: false,
    };
  }
  render() {
    return (
      <div>
        <div className="smiley__container"  onMouseEnter={()=>this.setState({isShowing:true})} onMouseLeave={()=>this.setState({isShowing:false})} >
          {this.props.mood === 'happy' ?
            <img className="smiley" src={happy} alt={this.props.mood} title={this.props.date} /> :
            <img className="smiley" src={sad} alt={this.props.mood} title={this.props.date} />
          }
        </div>
        {
            this.state.isShowing &&
          <div className="info__container">
            <p className="info__date">{this.props.date}</p>
            <div className="showmsg">
              {this.props.message !== ''? <p className="info__message">{this.props.message}</p> : ''}
            </div>
          </div>
        }
      </div>
    );
  }
}

export default Mood;
