import {Howl} from 'howler';

const play = url => {
  // var file = new File([url], "testfile.mp3");
  // console.log(file);

  var recording = new Howl({
    src: [url],
    format: 'mp3',
    html5: true
  });
  console.log(recording);
  recording.play();
}

export default play;