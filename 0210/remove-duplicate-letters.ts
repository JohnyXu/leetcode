function removeDuplicateLetters(s: string): string {
  let n = s.length;
  let last: number[] = Array.from<number>({ length: 26 }).fill(0);
  for (let i = 0; i < n; i++) {
    last[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
  }

  console.log(last);

  let stk: string[] = [];
  let mask = 0;
  for (let i = 0; i < n; i++) {
    let c = s.charAt(i);
    if (((mask >> (c.charCodeAt(0) - 'a'.charCodeAt(0))) & 1) === 1) {
      continue;
    }
    while (
      stk.length > 0 &&
      stk[stk.length - 1] > c &&
      last[stk[stk.length - 1].charCodeAt(0) - 'a'.charCodeAt(0)] > i
    ) {
      const stkE = stk.pop() as string;
      mask ^= 1 << (stkE.charCodeAt(0) - 'a'.charCodeAt(0));
    }
    stk.push(c);
    mask |= 1 << (c.charCodeAt(0) - 'a'.charCodeAt(0));
  }
  return stk.join('');
}
console.log(removeDuplicateLetters('bcabc'));
