function findRelativeRanks(score: number[]): string[] {
  let sortScore: number[] = score.map((val) => val).sort((a, b) => b - a);
  let mapping: Map<number, string> = new Map<number, string>();

  for (let i = 0; i < sortScore.length; i++) {
    const num: number = sortScore[i];
    if (i === 0) {
      mapping.set(num, 'Gold Medal');
    } else if (i === 1) {
      mapping.set(num, 'Silver Medal');
    } else if (i === 2) {
      mapping.set(num, 'Bronze Medal');
    } else {
      mapping.set(num, (i + 1).toString());
    }
  }

  return score.map((val, index) => {
    return mapping.get(val) as string;
  });
}

console.log(findRelativeRanks([5, 4, 3, 2, 1]));
console.log(findRelativeRanks([10, 3, 8, 9, 4]));
