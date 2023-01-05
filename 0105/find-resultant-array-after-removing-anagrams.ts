function isAnagram(s1: string, s2: string) {
  return (
    s1
      .split('')
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      .join() ===
    s2
      .split('')
      .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
      .join()
  );
}

function removeAnagrams(words: string[]): string[] {
  if (words.length <= 1) {
    return words;
  }

  let index: number = words.length - 1;
  let newWords: string[] = words.filter(() => true);
  while (true) {
    if (isAnagram(newWords[index - 1], newWords[index])) {
      newWords = newWords.filter((val, i) => {
        return i !== index;
      });
      index = newWords.length - 1;
    } else {
      index--;
    }
    if (index < 1) {
      break;
    }
  }
  return newWords;
}

console.log(removeAnagrams(['abba', 'baba', 'bbaa', 'cd', 'cd']));
console.log(removeAnagrams(['a', 'b', 'c', 'd', 'e']));
console.log(removeAnagrams(['abababaab']));
