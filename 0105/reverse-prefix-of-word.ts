function reversePrefix(word: string, ch: string): string {
  let foundIdx: number = -1;
  for (let i = 0; i < word.length; i++) {
    const ch1 = word[i];
    if (ch1 === ch) {
      foundIdx = i;
      break;
    }
  }
  const prefix: string = word.substring(0, foundIdx + 1);
  return prefix.split('').reverse().join('') + word.substring(foundIdx);
}

console.log(reversePrefix('abcdefd', 'd'));
console.log(reversePrefix('xyxzxe', 'z'));
console.log(reversePrefix('abcd', 'z'));
