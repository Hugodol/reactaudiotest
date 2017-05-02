import playback from './playback.js';

const record = (recorder, urls, isRec, firstRec, firstCb) => {
  if (!firstRec) {
    firstCb();
  } else {
    urls.pop();
  }
  recorder.start();
  isRec();
  if (urls.length > 0) {
    playback(urls);
  }
  console.log(recorder.state);
  console.log('recording started');
}

export default record;