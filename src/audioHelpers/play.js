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
      html5: true,
      sprite: {
        begin: [offset, 30000]
      }
    });

    recording.play();
    recording2.play('begin');
  // });
}

export default play;