function numSpecialEquivGroups(words: string[]): number {
  let sets = new Set();
  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    let evens: string[] = [];
    let odds: string[] = [];
    for (let j = 0; j < word.length; j++) {
      const ch = word[j];
      if (j % 2 === 0) {
        evens.push(ch);
      } else {
        odds.push(ch);
      }
    }

    const key: string =
      evens
        .sort((a, b) => {
          return a.charCodeAt(0) - b.charCodeAt(0);
        })
        .join('') +
      odds
        .sort((a, b) => {
          return a.charCodeAt(0) - b.charCodeAt(0);
        })
        .join('');
    if (!sets.has(key)) {
      sets.add(key);
    }
  }
  return sets.size;
}
