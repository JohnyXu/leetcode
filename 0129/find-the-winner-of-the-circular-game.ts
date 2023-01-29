// REVIEW
function findTheWinner(n: number, k: number): number {
  if (n === 1) {
    return 1;
  }
  let ans: number = (findTheWinner(n - 1, k) + k) % n;
  return ans === 0 ? n : ans;
}
