function makeEqual(words: string[]): boolean {
  let count: number = words.length;
  const mapping: Map<string, number> = new Map<string, number>();
  for (let i = 0; i < words.length; i++) {
    const word: string = words[i];
    for (let j = 0; j < word.length; j++) {
      const ch = word[j];
      mapping.set(ch, (mapping.get(ch) || 0) + 1);
    }
  }
  for (const ch of mapping.keys()) {
    const cnt: number = mapping.get(ch) as number;
    if (cnt % count !== 0) {
      return false;
    }
  }
  return true;
}
