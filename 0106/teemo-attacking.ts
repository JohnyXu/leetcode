function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let count: number = 0;
  for (let i = timeSeries.length - 1; i >= 0; i--) {
    let start: number = timeSeries[i];
    let end: number = start + duration;
    if (i !== timeSeries.length - 1) {
      if (timeSeries[i + 1] < end) {
        end = timeSeries[i + 1];
      }
    }
    for (let j = start; j < end; j++) {
      count += 1;
    }
  }
  return count;
}

console.log(findPoisonedDuration([1, 4], 2));
console.log(findPoisonedDuration([1, 2], 2));
