const record = recorder => {
  let media = recorder;
  media.start();
  console.log(media.state);
  console.log('recording started');
}

export default record;