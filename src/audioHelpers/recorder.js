const recorder = stream => {
  return new MediaRecorder(stream);
}

export default recorder;