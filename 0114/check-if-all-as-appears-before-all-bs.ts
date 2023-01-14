function checkString(s: string): boolean {
  let maximumA: number = -1;
  let minimumB: number = s.length;

  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if (cur === 'a') {
      maximumA = Math.max(maximumA, i);
    } else if (cur === 'b') {
      minimumB = Math.min(minimumB, i);
    }
  }

  if (maximumA >= 0 && minimumB < s.length) {
    return maximumA < minimumB;
  }

  return (maximumA >= 0 && minimumB === s.length) || (maximumA === -1 && minimumB < s.length);
}

console.log(checkString('aaabbb'));
console.log(checkString('abab'));
console.log(checkString('bbb'));
console.log(checkString('a'));
