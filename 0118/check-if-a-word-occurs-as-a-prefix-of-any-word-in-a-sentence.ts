function isPrefixOfWord(sentence: string, searchWord: string): number {
  const words: string[] = sentence.split(' ');
  for (let i = 0; i < words.length; i++) {
    const cur = words[i];
    if (cur.startsWith(searchWord)) {
      return i + 1;
    }
  }
  return -1;
}
