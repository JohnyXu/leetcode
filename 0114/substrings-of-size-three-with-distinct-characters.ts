function countGoodSubstrings(s: string): number {
  let count: number = 0;
  for (let i = 0; i < s.length - 2; i++) {
    const cur: string = s[i];
    const next: string = s[i + 1];
    const third: string = s[i + 2];
    if (cur !== next && next !== third && cur !== third) {
      count++;
    }
  }
  return count;
}

console.log(countGoodSubstrings('xyzzaz'));
console.log(countGoodSubstrings('aababcabc'));
