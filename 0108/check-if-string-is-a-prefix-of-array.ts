function isPrefixString(s: string, words: string[]): boolean {
  if (words.length <= 0) {
    return false;
  }
  if (s[0] !== words[0][0]) {
    return false;
  }

  let acc: string = '';
  for (let i = 0; i < words.length; i++) {
    const cur = words[i];
    acc += cur;
    if (acc === s) {
      return true;
    }
  }
  return false;
}

console.log(isPrefixString('iloveleetcode', ['i', 'love', 'leetcode', 'apples']));
console.log(isPrefixString('iloveleetcode', ['apples', 'i', 'love', 'leetcode']));
