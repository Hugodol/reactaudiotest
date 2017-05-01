import play from './play.js';

const record = (recorder, urls) => {
  let media = recorder;
  media.start();
  if (urls.length > 0) {
    play(urls, 0);
  }
  console.log(media.state);
  console.log('recording started');
}

export default record;