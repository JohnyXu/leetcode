function arrayRankTransform(arr: number[]): number[] {
  let sort = arr
    .map((val) => val)
    .sort((a, b) => {
      return a - b;
    });

  const mapping: Map<number, number> = new Map<number, number>();
  let next: number = 1;
  for (let i = 0; i < sort.length; i++) {
    const cur = sort[i];
    if (i > 0) {
      if (sort[i] === sort[i - 1]) {
        next = mapping.get(sort[i - 1]) as number;
      } else {
        next = (mapping.get(sort[i - 1]) as number) + 1;
      }
    }
    mapping.set(cur, next);
  }
  return arr.map((val) => {
    return mapping.get(val) as number;
  });
}

console.log(arrayRankTransform([40, 10, 20, 30]));
console.log(arrayRankTransform([100, 100, 100]));
console.log(arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]));
