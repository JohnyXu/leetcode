function bestHand(ranks: number[], suits: string[]): string {
  const first: string = suits[0];
  const isFlush: boolean = suits.every((item) => {
    return item === first;
  });
  if (isFlush) {
    return 'Flush';
  }
  const rankMap: Map<number, number> = new Map<number, number>();
  for (const rank of ranks) {
    rankMap.set(rank, (rankMap.get(rank) || 0) + 1);
  }

  let max: number = 0;
  for (const [key, count] of rankMap) {
    if (count > max) {
      max = count;
    }
  }
  if (max >= 3) {
    return 'Three of a Kind';
  } else if (max === 2) {
    return 'Pair';
  } else {
    return 'High Card';
  }
}

console.log(bestHand([13, 2, 3, 1, 9], ['a', 'a', 'a', 'a', 'a']));
console.log(bestHand([4, 4, 2, 4, 4], ['d', 'a', 'a', 'b', 'c']));
console.log(bestHand([10, 10, 2, 12, 9], ['a', 'b', 'c', 'a', 'd']));
