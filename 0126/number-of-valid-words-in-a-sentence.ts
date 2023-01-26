function isValid(s: string): boolean {
  if (s.trim().length <= 0) {
    return false;
  }
  let countHyphens: number = 0;
  let countPunctuation: number = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === '-') {
      countHyphens += 1;
      if (countHyphens > 1) {
        return false;
      }
      if (i <= 0 || i >= s.length - 1) {
        return false;
      } else {
        let prevCode: number = s[i - 1].charCodeAt(0);
        if (prevCode > 'z'.charCodeAt(0) || prevCode < 'a'.charCodeAt(0)) {
          return false;
        }
        let nextCode: number = s[i + 1].charCodeAt(0);
        if (nextCode > 'z'.charCodeAt(0) || nextCode < 'a'.charCodeAt(0)) {
          return false;
        }
      }
    } else if ('!,. '.includes(ch)) {
      countPunctuation += 1;
      if (countPunctuation > 1) {
        return false;
      }
      if (i < s.length - 1) {
        return false;
      }
    } else {
      const chCode: number = ch.charCodeAt(0);
      if (chCode >= '0'.charCodeAt(0) && chCode <= '9'.charCodeAt(0)) {
        return false;
      }
    }
  }
  return true;
}

function countValidWords(sentence: string): number {
  const words: string[] = sentence.split(' ');
  let count: number = 0;
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    if (isValid(w)) {
      count += 1;
    }
  }
  return count;
}
