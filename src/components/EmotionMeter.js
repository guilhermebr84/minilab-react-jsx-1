function EmotionMeter() {
  let emotion = false;

  if (emotion) {
    return (
      <div>
        <i className="fa-solid fa-face-smile">happy</i>
      </div>
    );
  } else {
    return (
      <div>
        <i class="fa-solid fa-face-frown">sad</i>
      </div>
    );
  }
}

export default EmotionMeter;
