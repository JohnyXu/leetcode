function reformat(s: string): string {
  let digits: string[] = [];
  let letters: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    const chCode: number = ch.charCodeAt(0);
    if (chCode >= 'a'.charCodeAt(0) && chCode <= 'z'.charCodeAt(0)) {
      letters.push(ch);
    } else if (chCode >= '0'.charCodeAt(0) && chCode <= '9'.charCodeAt(0)) {
      digits.push(ch);
    }
  }
  if (Math.abs(digits.length - letters.length) >= 2) {
    return '';
  }
  let ans: string[] = [];
  if (digits.length < letters.length) {
    ans.push(letters[0]);
    for (let i = 0; i < digits.length; i++) {
      const d = digits[i];
      const l = letters[i + 1];
      ans.push(d);
      ans.push(l);
    }
  } else {
    ans.push(digits[0]);
    for (let i = 0; i < letters.length; i++) {
      const l = letters[i];
      const d = digits[i + 1];

      ans.push(l);
      ans.push(d);
    }
  }
  return ans.join('');
}
