import {Howl} from 'howler';

const play = urls => {
  urls.forEach(track => {
    var recording = new Howl({
      src: [track],
      format: 'mp3',
      html5: true
    });
    recording.play();
  });
}

export default play;