function checkArithmeticSubarrays(nums: number[], l: number[], r: number[]): boolean[] {
  let ans: boolean[] = [];
  for (let i = 0; i < l.length; i++) {
    let newNums: number[] = nums.filter((val, idx) => {
      return idx >= l[i] && idx <= r[i];
    });

    newNums.sort((a, b) => a - b);
    let diff = newNums[1] - newNums[0];
    let match: boolean = true;
    for (let i = 2; i < newNums.length; i++) {
      let d: number = newNums[i] - newNums[i - 1];
      if (d !== diff) {
        match = false;
        break;
      }
    }
    ans.push(match);
  }
  return ans;
}
