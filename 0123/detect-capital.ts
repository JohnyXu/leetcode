function allLowercase(s: string) {
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    const chCode: number = ch.charCodeAt(0);
    if (chCode > 'z'.charCodeAt(0) || chCode < 'a'.charCodeAt(0)) {
      return false;
    }
  }
  return true;
}

function detectCapitalUse(word: string): boolean {
  if (word.length <= 1) {
    return true;
  }

  const first: string = word[0];
  const fCharCode: number = first.charCodeAt(0);
  if (fCharCode >= 'A'.charCodeAt(0) && fCharCode <= 'Z'.charCodeAt(0)) {
    const second: string = word[1];
    const sCode: number = second.charCodeAt(0);
    if (sCode >= 'A'.charCodeAt(0) && sCode <= 'Z'.charCodeAt(0)) {
      for (let i = 2; i < word.length; i++) {
        const ch = word[i];
        const chCode: number = ch.charCodeAt(0);
        if (chCode > 'Z'.charCodeAt(0) || chCode < 'A'.charCodeAt(0)) {
          return false;
        }
      }
      return true;
    }
    return allLowercase(word.substring(1));
  }
  // all lower
  return allLowercase(word);
}
