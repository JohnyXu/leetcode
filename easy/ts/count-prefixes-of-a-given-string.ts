function countPrefixes(words: string[], s: string): number {
  let count: number = 0;
  for (let i = 0; i < words.length; i++) {
    if (s.startsWith(words[i])) {
      count += 1;
    }
  }
  return count;
}
