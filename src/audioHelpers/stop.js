const stop = recorder => {
  let media = recorder;
  media.stop();
  console.log(media.state);
  console.log('recording stopped');
}

export default stop;