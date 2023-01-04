function subsets(nums: number[]): number[][] {
  let ans: number[][] = [];
  let t: number[] = [];
  function dfs(depth: number) {
    if (depth === nums.length) {
      ans.push([...t]);
      return;
    }
    dfs(depth + 1);
    t.push(nums[depth]);
    dfs(depth + 1);
    t.pop();
  }
  dfs(0);
  return ans;
}

console.log(subsets([1, 2, 3]));
console.log(subsets([0]));
