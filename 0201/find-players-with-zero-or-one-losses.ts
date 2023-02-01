function findWinners(matches: number[][]): number[][] {
  let winners: Map<number, boolean> = new Map();
  let losers: Map<number, number> = new Map();
  for (let i = 0; i < matches.length; i++) {
    const [winner, loser] = matches[i];
    winners.set(loser, false);
    if (!winners.has(winner)) {
      winners.set(winner, true);
    }
    losers.set(loser, (losers.get(loser) ?? 0) + 1);
  }
  let ans: number[][] = [];
  let winArr: number[] = [];
  for (const key of winners.keys()) {
    const result: boolean = winners.get(key) as boolean;
    if (result) {
      winArr.push(key);
    }
  }
  ans.push(winArr.sort((a, b) => a - b));
  let loseArr: number[] = [];
  for (const key of losers.keys()) {
    const count: number = losers.get(key) as number;
    if (count === 1) {
      loseArr.push(key);
    }
  }
  ans.push(loseArr.sort((a, b) => a - b));
  return ans;
}
