function countAsterisks(s: string): number {
  let count: number = 0;
  let sum: number = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '*' && count % 2 === 0) {
      sum += 1;
    } else if (s[i] === '|') {
      count++;
    }
  }
  return sum;
}

console.log(countAsterisks('l|*e*et|c**o|*de|'));
console.log(countAsterisks('iamprogrammer'));
console.log(countAsterisks('yo|uar|e**|b|e***au|tifu|l'));
