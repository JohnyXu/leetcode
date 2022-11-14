function lastStoneWeight(stones: number[]): number {
  stones.sort((a, b) => b - a);
  while (true) {
    if (stones.length <= 1) {
      break;
    }
    const [first, second, ...rest] = stones;
    if (first === second) {
      stones = rest;
    } else {
      stones = [first - second].concat(rest).sort((a, b) => b - a);
    }
  }
  if (stones.length > 0) {
    return stones[0];
  }
  return 0;
}

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log(lastStoneWeight([1]));
console.log(lastStoneWeight([2, 2]));
