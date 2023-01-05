function percentageLetter(s: string, letter: string): number {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (cur === letter) {
      count++;
    }
  }
  return Math.floor((count * 100) / s.length);
}

console.log(percentageLetter('foobar', 'o'));
console.log(percentageLetter('j', 'k'));
console.log(percentageLetter('sgawtb', 's'));
