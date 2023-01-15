function toGoatLatin(sentence: string): string {
  const strs: string[] = sentence.split(' ');
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  const converted: string[] = strs.map((word: string, idx) => {
    const isVowel: boolean = vowels.some((ch) => word.startsWith(ch));
    let newWord = word;
    if (isVowel) {
      // rule 1
      newWord = newWord + 'ma';
    } else {
      // rule2
      newWord = newWord.substring(1) + newWord.substring(0, 1) + 'ma';
    }

    // rule 3
    newWord += Array.from<string>({ length: idx + 1 })
      .fill('a')
      .join('');
    return newWord;
  });
  return converted.join(' ');
}
