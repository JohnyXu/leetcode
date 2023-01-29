// REVIEW
function findAndReplacePattern(words: string[], pattern: string): string[] {
  let ans: string[] = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const mapping = new Map();
    const mappging2 = new Map();
    let match: boolean = true;
    if (word.length === pattern.length) {
      for (let i = 0; i < word.length; i++) {
        const ch = word[i];
        const satisfy: boolean =
          (mapping.has(ch) && mapping.get(ch) !== pattern[i]) ||
          (mappging2.has(pattern[i]) && mappging2.get(pattern[i]) !== ch);
        if (satisfy) {
          match = false;
          break;
        }
        mapping.set(ch, pattern[i]);
        mappging2.set(pattern[i], ch);
      }
    }
    if (match) {
      ans.push(word);
    }
  }
  return ans;
}
