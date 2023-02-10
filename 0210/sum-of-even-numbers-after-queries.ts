function sumEvenAfterQueries(nums: number[], queries: number[][]): number[] {
  let ans: number[] = Array.from<number>({ length: queries.length }).fill(0);

  for (let i = 0; i < queries.length; i++) {
    const [val, idx] = queries[i];
    nums[idx] = nums[idx] + val;
    ans[i] = nums.reduce((acc, cur) => acc + (cur % 2 ? 0 : cur), 0);
  }
  return ans;
}
