function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
  const sum1: number = aliceSizes.reduce((sum, current) => {
    return sum + current;
  }, 0);
  const sum2: number = bobSizes.reduce((sum, current) => {
    return sum + current;
  });
  let diff = (sum1 - sum2) >> 1;
  for (let num of aliceSizes) {
    let target = num - diff;
    if (bobSizes.includes(target)) {
      return [num, target];
    }
  }
  return [];
}

console.log(fairCandySwap([1, 1], [2, 2]));
console.log(fairCandySwap([1, 2], [2, 3]));
console.log(fairCandySwap([2], [1, 3]));
