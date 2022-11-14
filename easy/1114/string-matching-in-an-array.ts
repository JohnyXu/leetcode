function stringMatching(words: string[]): string[] {
  words.sort((a, b) => a.length - b.length);

  const sets: Set<string> = new Set<string>();
  for (let i = words.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      const parent: string = words[i];
      const current: string = words[j];
      if (parent.includes(current)) {
        sets.add(current);
      }
    }
  }
  let res: string[] = [];
  for (const word of sets) {
    res.push(word);
  }
  return res;
}

console.log(stringMatching(['mass', 'as', 'hero', 'superhero']));
console.log(stringMatching(['leetcode', 'et', 'code']));
console.log(stringMatching(['blue', 'green', 'bu']));
