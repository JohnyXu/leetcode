function differenceOfSum(nums: number[]): number {
  let sum: number = nums.reduce((acc, cur) => acc + cur, 0);
  let sum2: number = nums.reduce((acc, cur) => {
    let sm: number = 0;
    while (cur !== 0) {
      sm += cur % 10;
      cur = Math.floor(cur / 10);
    }
    return acc + sm;
  }, 0);
  return sum - sum2;
}
console.log(differenceOfSum([1, 15, 6, 3]));
console.log(differenceOfSum([1, 2, 3, 4]));
