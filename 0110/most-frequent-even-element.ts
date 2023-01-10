function mostFrequentEven(nums: number[]): number {
  const evens: number[] = nums.filter((num) => {
    return num % 2 === 0;
  });

  const mapping: Map<number, number> = new Map<number, number>();
  for (let i = 0; i < evens.length; i++) {
    const cur = evens[i];
    mapping.set(cur, (mapping.get(cur) || 0) + 1);
  }

  let most: number = 0;
  let elem: number = -1;
  for (const key of mapping.keys()) {
    const count: number = mapping.get(key) as number;
    if (count > most) {
      elem = key;
      most = count;
    } else if (count === most) {
      if (key < elem) {
        elem = key;
      }
    }
  }
  return elem;
}

console.log(mostFrequentEven([0, 1, 2, 2, 4, 4, 1]));
console.log(mostFrequentEven([4, 4, 4, 9, 2, 4]));
console.log(mostFrequentEven([29, 47, 21, 41, 13, 37, 25, 7]));
