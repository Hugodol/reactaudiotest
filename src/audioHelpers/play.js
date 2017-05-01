import {Howl} from 'howler';

const play = (urls, offset) => {
  // urls.forEach(track => {
    var recording = new Howl({
      src: [urls[0]],
      format: 'mp3',
      html5: true
    });

    var recording2 = new Howl({
      src: [urls[1]],
      format: 'mp3',
      html5: true
    });

    setTimeout(() => {
      recording.play();
    }, offset);
    recording2.play();
  // });
}

export default play;