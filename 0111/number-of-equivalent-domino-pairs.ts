function numEquivDominoPairs(dominoes: number[][]): number {
  let count: number = 0;
  for (let i = 0; i < dominoes.length; i++) {
    const cur = dominoes[i];
    const [first, second] = cur;
    for (let j = i + 1; j < dominoes.length; j++) {
      const t = dominoes[j];
      const [t1, t2] = t;
      if ((t1 === first && t2 === second) || (t1 === second && t2 === first)) {
        count += 1;
      }
    }
  }
  return count;
}

console.log(
  numEquivDominoPairs([
    [1, 2],
    [2, 1],
    [3, 4],
    [5, 6],
  ]),
);
console.log(
  numEquivDominoPairs([
    [1, 2],
    [1, 2],
    [1, 1],
    [1, 2],
    [2, 2],
  ]),
);
