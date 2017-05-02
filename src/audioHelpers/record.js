import playback from './playback.js';

const record = (recorder, urls) => {
  // if (urls.length > 0) {
  //   urls.pop();
  // }
  recorder.start();
  if (urls.length > 0) {
    playback(urls);
  }
  console.log(recorder.state);
  console.log('recording started');
}

export default record;