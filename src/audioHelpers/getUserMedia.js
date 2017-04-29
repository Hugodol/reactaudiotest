let constraints = {audio: true};
let chunks = [];

const getUserMedia = (urlCb, recCb) => {
  if (navigator.getUserMedia) {
    console.log('getUserMedia supported');
    navigator.mediaDevices.getUserMedia(constraints)
    .then(stream => {
      let recorder = new MediaRecorder(stream);
      recCb(recorder);
      recorder.onstop = e => {
        let blob = new Blob(chunks, {'type': 'audio/mp3'});

        console.log('blob', blob);
        var file = new File([blob], 'test.mp3');
        console.log('file', file);

        chunks = [];
        // let url = window.URL.createObjectURL(blob);
        urlCb(file);
      }
      recorder.ondataavailable = e => chunks.push(e.data);
    })
    .catch(err => console.log(err));
  } else {
    console.log('getUserMedia not supported on your browser!');
  }
}

export default getUserMedia;