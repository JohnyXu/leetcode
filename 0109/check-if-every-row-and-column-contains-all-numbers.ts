function checkValid(matrix: number[][]): boolean {
  let sets: Set<number> = new Set<number>();
  let sum: number = 0;
  for (let i = 0; i < matrix.length; i++) {
    sets.add(i + 1);
    sum += i + 1;
  }

  for (let a = 0; a < matrix.length; a++) {
    let thisSum: number = 0;
    let subSets: Set<number> = new Set<number>();
    for (let b = 0; b < matrix.length; b++) {
      thisSum += matrix[a][b];
      subSets.add(matrix[a][b]);
    }
    if (subSets.size !== sets.size || sum !== thisSum) {
      return false;
    }
    for (const key of sets.keys()) {
      if (!subSets.has(key)) {
        return false;
      }
    }

    thisSum = 0;
    subSets = new Set<number>();
    for (let b = 0; b < matrix.length; b++) {
      thisSum += matrix[b][a];
      subSets.add(matrix[b][a]);
    }
    if (subSets.size !== sets.size || sum !== thisSum) {
      return false;
    }
    for (const key of sets.keys()) {
      if (!subSets.has(key)) {
        return false;
      }
    }
  }
  return true;
}

console.log(
  checkValid([
    [1, 2, 3],
    [3, 1, 2],
    [2, 3, 1],
  ]),
);
console.log(
  checkValid([
    [1, 1, 1],
    [1, 2, 3],
    [1, 2, 3],
  ]),
);
