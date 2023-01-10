function findJudge(n: number, trust: number[][]): number {
  let sets: Set<number> = new Set<number>();

  for (let i = 0; i < trust.length; i++) {
    sets.add(trust[i][1]);
  }
  for (let i = 0; i < trust.length; i++) {
    const cur = trust[i][0];
    if (sets.has(cur)) {
      sets.delete(cur);
    }
  }
  if (sets.size === 1) {
    let theJudge: number = -1;

    for (const key of sets.keys()) {
      theJudge = key;
      break;
    }
    let trustSets: Set<number> = new Set<number>();
    for (let i = 1; i <= n; i++) {
      if (i != theJudge) {
        trustSets.add(i);
      }
    }

    for (let i = 0; i < trust.length; i++) {
      const cur = trust[i][0];
      if (trustSets.has(cur) && trust[i][1] === theJudge) {
        trustSets.delete(cur);
      }
    }
    if (trustSets.size === 0) {
      return theJudge;
    }
  }

  if (n === 1 && trust.length === 0) {
    return 1;
  }

  return -1;
}

console.log(findJudge(2, [[1, 2]]));
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
  ]),
);
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
    [3, 1],
  ]),
);
