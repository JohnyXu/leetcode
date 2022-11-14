function answerQueries(nums: number[], queries: number[]): number[] {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  return queries.map((query) => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += nums[i];
      if (sum > query) {
        return i;
      }
    }
    return n;
  });
}

console.log(answerQueries([4, 5, 2, 1], [3, 10, 21]));
console.log(answerQueries([4, 5, 2, 1], [1]));
