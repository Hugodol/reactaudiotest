const stop = recorder => {
  recorder.stop();
  console.log(recorder.state);
  console.log('recording stopped');
}

export default stop;