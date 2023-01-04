function numOfStrings(patterns: string[], word: string): number {
  return patterns.reduce((acc, cur) => {
    return acc + (word.includes(cur) ? 1 : 0);
  }, 0);
}

console.log(numOfStrings(['a', 'abc', 'bc', 'd'], 'abc'));
console.log(numOfStrings(['a', 'b', 'c'], 'aaaaabbbbb'));
console.log(numOfStrings(['a', 'a', 'a'], 'ab'));
