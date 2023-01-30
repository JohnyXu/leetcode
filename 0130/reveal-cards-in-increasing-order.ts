function deckRevealedIncreasing(deck: number[]): number[] {
  let q: number[] = [];
  let n: number = deck.length;
  deck.sort((a, b) => a - b);
  for (let i = n - 1; i >= 0; i--) {
    if (q.length > 0) {
      let e: number = q.pop() as number;
      q.unshift(e);
    }
    q.unshift(deck[i]);
  }
  let ans: number[] = Array.from<number>({ length: n }).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    ans[i] = q.pop() as number;
  }
  return ans;
}
