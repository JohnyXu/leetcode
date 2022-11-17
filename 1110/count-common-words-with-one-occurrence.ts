function countWords(words1: string[], words2: string[]): number {
  let sum: number = 0;
  const wordMap1: { [key: string]: number } = {};
  const wordMap2: { [key: string]: number } = {};
  words1.forEach((word) => {
    wordMap1[word] = (wordMap1[word] || 0) + 1;
  });
  words2.forEach((word) => {
    wordMap2[word] = (wordMap2[word] || 0) + 1;
  });

  for (const [key, count] of Object.entries(wordMap1)) {
    if (wordMap2[key] && wordMap2[key] === count && count === 1) {
      sum += 1;
    }
  }
  return sum;
}

console.log(countWords(['leetcode', 'is', 'amazing', 'as', 'is'], ['amazing', 'leetcode', 'is']));
console.log(countWords(['b', 'bb', 'bbb'], ['a', 'aa', 'aaa']));
console.log(countWords(['a', 'ab'], ['a', 'a', 'a', 'ab']));
