function removePrefix0(s: string) {
  if (!s.startsWith('0')) {
    return s;
  }
  let sub: string = '';
  for (let j = 1; j < s.length; j++) {
    const cur = s[j];
    if (!sub && cur !== '0') {
      sub = cur;
    } else {
      if (sub.length > 0) {
        sub += cur;
      }
    }
  }
  return sub;
}

function numDifferentIntegers(word: string): number {
  let sets = new Set();
  let acc: string = '';
  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    const chCode: number = ch.charCodeAt(0);
    if (chCode >= '0'.charCodeAt(0) && chCode <= '9'.charCodeAt(0)) {
      acc += ch;
    } else {
      if (acc.length > 0) {
        if (acc.startsWith('0')) {
          sets.add(removePrefix0(acc));
        } else {
          sets.add(acc);
        }
      }
      acc = '';
    }
  }
  if (acc.length > 0) {
    sets.add(removePrefix0(acc));
  }
  return sets.size;
}
