function processQueries(queries: number[], m: number): number[] {
  let nums: number[] = [];
  for (let i = 1; i <= m; i++) {
    nums.push(i);
  }
  let ans: number[] = [];
  for (let i = 0; i < queries.length; i++) {
    const n = queries[i];
    const idx: number = nums.indexOf(n);
    ans.push(idx);
    nums.splice(idx, 1);
    nums.unshift(n);
  }
  return ans;
}
