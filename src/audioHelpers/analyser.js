import WaveSurfer from 'wavesurfer';

const waveform = url => {
  let wavesurfer = WaveSurfer.create({
    container: '#waveform'
  });
  wavesurfer.load(url);
}

export default waveform;