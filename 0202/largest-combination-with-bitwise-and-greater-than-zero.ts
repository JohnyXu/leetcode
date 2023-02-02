// REVIEW
function largestCombination(candidates: number[]): number {
  let ans: number = 0;
  for (let i = 1; i <= 32; i++) {
    let t: number = 0;
    for (let j = 0; j < candidates.length; j++) {
      const c = candidates[j];
      t = t + ((c >> i) & 1);
    }
    ans = Math.max(ans, t);
  }
  return ans;
}
