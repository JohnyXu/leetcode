function checkIfPangram(sentence: string): boolean {
  const mapping: Map<string, number> = new Map<string, number>();
  for (let i = 0; i < 26; i++) {
    mapping.set(String.fromCharCode('a'.charCodeAt(0) + i), 0);
  }
  for (let i = 0; i < sentence.length; i++) {
    const ch: string = sentence[i];
    mapping.set(ch, (mapping.get(ch) || 0) + 1);
  }

  for (const num of mapping.values()) {
    if (num < 1) {
      return false;
    }
  }
  return true;
}

console.log(checkIfPangram('thequickbrownfoxjumpsoverthelazydog'));
console.log(checkIfPangram('leetcode'));
