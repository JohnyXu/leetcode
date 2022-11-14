function numberOfLines(widths: number[], s: string): number[] {
  let count: number = 0;
  let total: number = 0;
  for (let i = 0; i < s.length; i++) {
    const ch: string = s[i];
    const width: number = widths[ch.charCodeAt(0) - 97];
    total += width;
    if (total >= 100) {
      if (total > 100) {
        total -= width;
        i--;
      }
      if (i !== s.length - 1) {
        count += 1;
        total = 0;
      }
    }
  }
  if (total > 0) {
    count += 1;
  }
  return [count, total];
}

console.log(
  numberOfLines(
    [
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10,
    ],
    'abcdefghijklmnopqrstuvwxyz',
  ),
);
console.log(
  numberOfLines(
    [
      4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10,
    ],
    'bbbcccdddaaa',
  ),
);
