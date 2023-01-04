function permute(nums: number[]): number[][] {
  let ans: number[][] = [];
  let t: number[] = [];
  let visited: boolean[] = Array.from<boolean>({ length: nums.length }).fill(false);
  function dfs(depth: number) {
    if (depth === nums.length) {
      ans.push([...t]);
    }
    for (let i = 0; i < nums.length; i++) {
      if (!visited[i]) {
        t.push(nums[i]);
        visited[i] = true;
        dfs(depth + 1);
        visited[i] = false;
        t.pop();
      }
    }
  }
  dfs(0);
  return ans;
}

console.log(permute([0, 1]));
console.log(permute([1]));
console.log(permute([1, 2, 3]));
