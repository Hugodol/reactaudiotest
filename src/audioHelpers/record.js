import playback from './playback.js';

const record = (recorder, urls) => {
  console.log('url array is', urls);
  let media = recorder;
  media.start();
  if (urls.length > 0) {
    playback(urls);
  }
  console.log(media.state);
  console.log('recording started');
}

export default record;