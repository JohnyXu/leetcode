function reverseWords(s: string): string {
  let arr: string[] = s
    .trim()
    .split(' ')
    .filter((val) => !!val);
  return arr.reverse().join(' ');
}
