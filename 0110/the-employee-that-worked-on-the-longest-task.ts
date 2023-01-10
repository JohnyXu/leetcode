function hardestWorker(n: number, logs: number[][]): number {
  let maximum = -1;
  let minimumIdx = n - 1;
  for (let i = logs.length - 1; i >= 0; i--) {
    const cur = logs[i][1];
    let prev = 0;

    if (i > 0) {
      prev = logs[i - 1][1];
    } else {
      prev = 0;
    }
    let diff: number = cur - prev;
    if (diff > maximum) {
      maximum = diff;
      minimumIdx = logs[i][0];
    } else if (diff == maximum) {
      if (minimumIdx > logs[i][0]) {
        minimumIdx = logs[i][0];
      }
    }
  }
  return minimumIdx;
}

console.log(
  hardestWorker(10, [
    [0, 3],
    [2, 5],
    [0, 9],
    [1, 15],
  ]),
);
console.log(
  hardestWorker(26, [
    [1, 1],
    [3, 7],
    [2, 12],
    [7, 17],
  ]),
);
console.log(
  hardestWorker(2, [
    [0, 10],
    [1, 20],
  ]),
);
