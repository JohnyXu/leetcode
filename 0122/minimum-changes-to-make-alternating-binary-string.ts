function minOperations(s: string): number {
  let first: string = '';
  let second: string = '';

  for (let i = 0; i < s.length; i++) {
    if (i % 2) {
      first += '0';
      second += '1';
    } else {
      first += '1';
      second += '0';
    }
  }
  let minimum1: number = 0;
  let minimum2: number = 0;

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch !== first[i]) {
      minimum1++;
    }
    if (ch !== second[i]) {
      minimum2++;
    }
  }
  return Math.min(minimum1, minimum2);
}
