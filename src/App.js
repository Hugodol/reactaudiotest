import React, { Component } from 'react';
import AudioVisual from './AudioVisual.js';
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
      urls: [],
      change: false,
      offset: 0
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

  setUrl(urls) {
    this.state.urls.push(urls);
    this.setState({change: !this.state.change});
  }

  setOffset(offset) {
    this.setState({offset: offset});
  }

  setTrackOffset(i, offset) {
    this.state.urls[i].offset = offset;
    this.setState({change: !this.state.change});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Cloud Mix Audio Tests</h2>
        </div>
        <button onClick={() => {
          record(this.state.recorder, this.state.urls);
        }}>Rec</button>
        <button onClick={() => {
          stop(this.state.recorder);
        }}>Stop</button>
        <button onClick={() => {
          play(this.state.urls, this.state.offset, this.setTrackOffset.bind(this));
        }}>Play</button>
        <input onChange={e => {
          this.setOffset(e.target.value);
          console.log('current offset is', e.target.value);
        }}></input>
        {this.state.urls.map((url, i) => {
          return <AudioVisual key={i} url={url.url} />
        })}
      </div>
    );
  }
}

export default App;
