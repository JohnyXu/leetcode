function stoneGame(piles: number[]): boolean {
  let alice: number = 0;
  let bob: number = 0;
  let i = 0;
  while (true) {
    let large: number = piles[0];
    if (large > piles[piles.length - 1]) {
      piles.shift();
    } else {
      large = piles[piles.length - 1];
      piles.pop();
    }

    if (i % 2 === 0) {
      alice += large;
    } else {
      bob += large;
    }
    if (piles.length <= 0) {
      break;
    }
  }
  return alice > bob;
}
