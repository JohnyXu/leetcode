function mostCommonWord(paragraph: string, banned: string[]): string {
  const words: string[] = [];
  const mapping: Map<string, number> = new Map<string, number>();
  const sets: Set<string> = new Set<string>(banned);

  let acc: string = '';

  for (let i = 0; i < paragraph.length; i++) {
    const ch = paragraph[i];
    if ("!?',;. ".includes(ch)) {
      if (acc.length > 0) {
        words.push(acc);
      }
      acc = '';
    } else {
      acc += ch;
    }
  }
  if (acc.length > 0) {
    words.push(acc);
  }

  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();

    if (!sets.has(word)) {
      mapping.set(word, (mapping.get(word) ?? 0) + 1);
    }
  }

  let maximum: number = -1;
  let target: string = '';
  for (const key of mapping.keys()) {
    const count: number = mapping.get(key) ?? 0;
    if (count > maximum) {
      maximum = count;
      target = key.toLowerCase();
    }
  }
  return target;
}
