function EmotionMeter() {
  let emotion = false;

  if (emotion) {
    return (
      <div>
        <i className="fas fa-smile fa-5x"></i>
      </div>
    );
  } else {
    return (
      <div>
        <i className="fas fa-frown fa-5x"></i>
      </div>
    );
  }
}

export default EmotionMeter;
