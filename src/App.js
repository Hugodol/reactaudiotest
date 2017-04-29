import React, { Component } from 'react';
import logo from './images/logo.svg';
import './styles/App.css';
import getUserMedia from './audioHelpers/getUserMedia.js';
import record from './audioHelpers/record.js';
import stop from './audioHelpers/stop.js';
import play from './audioHelpers/play.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recorder: null,
      url: null
    }
  }

  componentDidMount() {
    getUserMedia(
      this.setUrl.bind(this),
      this.setRecorder.bind(this)
    );
  }

  setRecorder(recorder) {
    this.setState({recorder: recorder});
  }

  setUrl(url) {
    this.setState({url: url});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Cloud Mix Audio Tests</h2>
        </div>
        <button onClick={() => {
          record(this.state.recorder);
        }}>Rec</button>
        <button onClick={() => {
          stop(this.state.recorder);
        }}>Stop</button>
        <button onClick={() => {
          play(this.state.url);
        }}>Play</button>
      </div>
    );
  }
}

export default App;
