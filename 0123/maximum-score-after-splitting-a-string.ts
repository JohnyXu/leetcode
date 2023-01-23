function getScore(s: string, ch: string): number {
  return s.split('').reduce((acc, cur) => {
    return acc + (cur === ch ? 1 : 0);
  }, 0);
}

function maxScore(s: string): number {
  let maximum: number = -1;
  for (let i = 1; i <= s.length - 1; i++) {
    const left: string = s.substring(0, i);
    const right: string = s.substring(i);
    const leftScore: number = getScore(left, '0');
    const rightScore: number = getScore(right, '1');
    const score: number = leftScore + rightScore;
    if (score > maximum) {
      maximum = score;
    }
  }
  return maximum;
}
