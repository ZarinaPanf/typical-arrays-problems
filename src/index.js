
exports.min = function min (array) {
  let minNumber = 0;
  if (!array || array === []) {
    return 0;
  }
  for (let i = 0; i<array.length; i++) {
    if (array[i]<minNumber) {
      minNumber = array[i];
    }
  }
  return minNumber;
}

exports.max = function max (array) {
  let maxNumber = 0;
  if (!array || array === []) {
    return 0;
  }
  for (let i = 0; i<array.length; i++) {
    if (array[i]>maxNumber) {
      maxNumber = array[i];
    }
  }
  return maxNumber;
}

exports.avg = function avg (array) {
  let sumNumber = 0;
  let avgNumber = 0;
  if (!array || array === []) {
    return 0;
  }
  for (let i = 0; i<array.length; i++) {
    sumNumber += array[i];
    avgNumber = sumNumber / array.length;
  }
  return avgNumber;
}
