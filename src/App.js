import React, { Component } from 'react';
import AudioVisual from './AudioVisual.js';
import logo from './images/logo.svg';
import './styles/App.css';
import micInputVisual from './audioHelpers/micInputVisual.js';
import getUserMedia from './audioHelpers/getUserMedia.js';
import record from './audioHelpers/record.js';
import stop from './audioHelpers/stop.js';
import play from './audioHelpers/play.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recorder: null,
      recording: false,
      urls: [],
      change: false,
      offset: 0,
      firstRec: false
    }
  }

  componentDidMount() {
    micInputVisual();
    getUserMedia(
      this.setUrl.bind(this),
      this.setRecorder.bind(this)
    );
  }

  setRecorder(recorder) {
    this.setState({recorder: recorder});
  }

  setRecording() {
    this.setState({recording: !this.state.recording});
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

  setFirstRec() {
    this.setState({firstRec: !this.state.firstRec});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Cloud Mix Audio Tests</h2>
        </div>
        <div id="input"></div>
        {this.state.recording ? (
          <button
            onClick={() => {
              stop(this.state.recorder, this.setRecording.bind(this));
            }}
          >Stop</button>
        ) : (
          <button
            onClick={() => {
              record(
                this.state.recorder,
                this.state.urls,
                this.setRecording.bind(this),
                this.state.firstRec,
                this.setFirstRec.bind(this)
              );
            }}
          >Rec</button>
        )}
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