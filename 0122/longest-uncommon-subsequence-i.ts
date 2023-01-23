function findLUSlength(a: string, b: string): number {
  if (a === b) {
    return -1;
  }

  if (a.length > b.length) {
    [a, b] = [b, a];
  }
  let len: number = 0;

  for (let i = 0; i < b.length - 1; i++) {
    for (let j = i + 1; j <= b.length; j++) {
      const s = b.substring(i, j);
      if (a.indexOf(s) === -1) {
        if (s.length > len) {
          len = s.length;
        }
      }
    }
  }
  return len;
}
