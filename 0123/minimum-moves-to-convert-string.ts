function minimumMoves(s: string): number {
  let minimum: number = 0;

  let count: number = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === 'X') {
      count += 1;
    } else {
      if (count > 0) {
        count += 1;
      }
    }
    if (count === 3) {
      minimum += 1;
      count = 0;
    }
  }
  if (count > 0) {
    minimum += 1;
  }
  return minimum;
}
