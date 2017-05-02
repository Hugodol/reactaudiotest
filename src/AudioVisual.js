import React from 'react';
import waveform from './audioHelpers/analyser.js';

class AudioVisual extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    waveform(this.props.url);
  }

  render() {
    return (
      <div>
        <div id='waveform'></div>
      </div>
    );
  }
}

export default AudioVisual;