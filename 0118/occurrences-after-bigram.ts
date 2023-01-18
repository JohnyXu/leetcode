function findOcurrences(text: string, first: string, second: string): string[] {
  let words: string[] = text.split(' ');

  let ans: string[] = [];
  for (let i = 0; i < words.length - 1; i++) {
    const cur = words[i];
    const next = words[i + 1];
    if (cur === first && next === second) {
      if (i + 2 < words.length) {
        ans.push(words[i + 2]);
      }
    }
  }
  return ans;
}
