function largestSumAfterKNegations(nums: number[], k: number): number {
  let negatives: number[] = [];
  let positives: number[] = [];
  const sortNums: number[] = nums.sort((a, b) => a - b);

  let hasZero: boolean = false;
  for (let i = 0; i < sortNums.length; i++) {
    const cur = sortNums[i];
    if (cur > 0) {
      positives.push(cur);
    } else if (cur === 0) {
      hasZero = true;
    } else {
      negatives.push(cur);
    }
  }

  if (negatives.length >= k) {
    return (
      negatives.reduce((acc, cur, index) => {
        return acc + (index < k ? -cur : cur);
      }, 0) + positives.reduce((acc, cur) => acc + cur, 0)
    );
  }

  let isEven: boolean = (k - negatives.length) % 2 === 0;
  let rest: number = 0;
  if (negatives.length > 0 && positives.length > 0) {
    rest =
      isEven || hasZero
        ? positives[0] - negatives[negatives.length - 1]
        : Math.abs(positives[0] + negatives[negatives.length - 1]);
  } else if (negatives.length > 0) {
    rest = isEven || hasZero ? -negatives[negatives.length - 1] : negatives[negatives.length - 1];
  } else if (positives.length > 0) {
    rest = isEven || hasZero ? positives[0] : -positives[0];
  }

  return (
    negatives.reduce((acc, cur, index) => {
      return index < negatives.length - 1 ? acc - cur : acc;
    }, 0) +
    positives.reduce((acc, cur, index) => {
      return acc + (index > 0 ? cur : 0);
    }, 0) +
    rest
  );
}

console.log(largestSumAfterKNegations([4, 2, 3], 1));
console.log(largestSumAfterKNegations([3, -1, 0, 2], 3));
console.log(largestSumAfterKNegations([2, -3, -1, 5, -4], 2));
console.log(largestSumAfterKNegations([-2, 5, 0, 2, -2], 3));
console.log(largestSumAfterKNegations([-4, -2, -3], 4));
