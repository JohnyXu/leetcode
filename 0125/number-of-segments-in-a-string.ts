function countSegments(s: string): number {
  let count: number = 0;
  let acc: string = '';
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if ("!@#$%^&*()_+-=',.: ".includes(ch)) {
      if (acc.length > 0) {
        count += 1;
      }
      acc = '';
    } else {
      acc += ch;
    }
  }
  if (acc.length > 0) {
    count += 1;
  }
  return count;
}
