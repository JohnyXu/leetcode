function commonChars(words: string[]): string[] {
  let chMap: Map<string, number> = new Map<string, number>();
  words[0].split('').forEach((ch, index) => {
    chMap.set(ch, (chMap.get(ch) || 0) + 1);
  });

  for (let i = 0; i < words.length; i++) {
    const word: string = words[i];
    let chMap2: Map<string, number> = new Map<string, number>();
    word.split('').forEach((ch, index) => {
      chMap2.set(ch, (chMap2.get(ch) || 0) + 1);
    });
    for (const [ch, count] of chMap.entries()) {
      if (!chMap2.get(ch)) {
        chMap.set(ch, 0);
      } else {
        chMap.set(ch, Math.min(chMap.get(ch) || 0, chMap2.get(ch) || 0));
      }
    }
  }
  let res: string[] = [];
  for (const [ch, count] of chMap.entries()) {
    if (count > 0) {
      for (let i = 0; i < count; i++) {
        res.push(ch);
      }
    }
  }
  return res;
}

console.log(commonChars(['bella', 'label', 'roller']));
console.log(commonChars(['cool', 'lock', 'cook']));
