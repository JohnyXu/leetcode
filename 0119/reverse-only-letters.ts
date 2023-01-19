function reverseOnlyLetters(s: string): string {
  const newS: string = s
    .split('')
    .filter((ch) => {
      return (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z');
    })
    .reverse()
    .join('');

  let j: number = 0;
  let sArr: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    if ((cur >= 'A' && cur <= 'Z') || (cur >= 'a' && cur <= 'z')) {
      sArr.push(newS[j++]);
    } else {
      sArr.push(cur);
    }
  }
  return sArr.join('');
}
