import WaveSurfer from 'wavesurfer';
import Microphone from '../../node_modules/wavesurfer/dist/plugin/wavesurfer.microphone.min.js';


const micInputVisual = () => {
  let wavesurfer = WaveSurfer.create({
    container: '#input',
    waveColor: 'green'
  });
  let microphone = Object.create(WaveSurfer.Microphone);
  microphone.init({
    wavesurfer: wavesurfer
  });
  microphone.on('deviceReady', function(stream) {
    console.log('Device ready!', stream);
  });
  microphone.on('deviceError', function(code) {
    console.warn('Device error: ' + code);
  });
  microphone.play();
}

export default micInputVisual;