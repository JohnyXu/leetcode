function combinationSum(candidates: number[], target: number): number[][] {
  let ans: number[][] = [];

  function dfs(arr: number[], left) {
    if (left === 0) {
      ans.push(arr);
      return;
    }
    for (let i = 0; i < candidates.length; i++) {
      const cur = candidates[i];
      if (cur <= left) {
        if (arr.length > 0) {
          if (cur >= arr[arr.length - 1]) {
            dfs([...arr, cur], left - cur);
          }
        } else {
          dfs([...arr, cur], left - cur);
        }
      }
    }
  }
  dfs([], target);
  return ans;
}
