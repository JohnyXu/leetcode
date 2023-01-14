function canBeTypedWords(text: string, brokenLetters: string): number {
  let words: string[] = text.split(' ');
  let wordCount: number = words.length;

  let brokens: string[] = brokenLetters.split('');
  for (let i = 0; i < words.length; i++) {
    const cur = words[i];
    for (const ch of brokens) {
      if (cur.includes(ch)) {
        wordCount -= 1;
        break;
      }
    }
  }
  return wordCount;
}

console.log(canBeTypedWords('hello world', 'ad'));
console.log(canBeTypedWords('leet code', 'lt'));
console.log(canBeTypedWords('leet code', 'e'));
