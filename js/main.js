function getRandomInRange (min, max, number) {
  if (min >= 0 && max >= 0) {
    if (min >= max) {
      const newMin = max;
      max = min;
      min = newMin;
    }
    const randomNumber = Math.random() * (max - min + 1) + min;
    return randomNumber.toFixed(number);
  }
  return NaN;
}

getRandomInRange(1,100,1);
