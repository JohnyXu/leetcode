function checkRecord(s: string): boolean {
  let countA: number = 0;
  let countL: number = 0;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === 'A') {
      countA++;
      if (countL < 3) {
        countL = 0;
      }
    } else if (ch === 'L') {
      countL += 1;
    } else {
      if (countL < 3) {
        countL = 0;
      }
    }
  }
  return countA < 2 && countL < 3;
}
