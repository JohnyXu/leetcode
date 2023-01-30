// REVIEW
function countMaxOrSubsets(nums: number[]): number {
  let maximum: number = 0;
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    maximum = maximum | num;
  }
  let ans: number = 0;

  function dfs(pre: number, depth: number) {
    if (depth === n) {
      if (pre === maximum) {
        ++ans;
      }
      return;
    }
    dfs(pre, depth + 1);
    dfs(pre | nums[depth], depth + 1);
  }
  dfs(0, 0);
  return ans;
}
