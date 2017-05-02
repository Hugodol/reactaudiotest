import React from 'react';
import './styles/AudioVisual.css';
import waveform from './audioHelpers/analyser.js';

class AudioVisual extends React.Component {

  componentDidMount() {
    waveform(this.props.url);
  }

  render() {
    return (
      <div>
        <div className='waveform'></div>
      </div>
    );
  }
}

export default AudioVisual;