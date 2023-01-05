function subsetXORSum(nums: number[]): number {
  let res: number[] = [];
  let prev: number = 0;

  function dfs(depth: number, prev: number) {
    res.push(prev);
    for (let i = depth; i < nums.length; i++) {
      prev ^= nums[i];
      depth++;
      dfs(depth, prev);
      prev ^= nums[i];
    }
  }
  dfs(0, prev);
  return res.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}

console.log(subsetXORSum([1, 3]));
console.log(subsetXORSum([5, 1, 6]));
console.log(subsetXORSum([3, 4, 5, 6, 7, 8]));
