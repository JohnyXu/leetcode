/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  let half: number = Math.ceil(s.length / 2);
  for (let i = 0; i < half; i++) {
    let temp: string = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }
}

reverseString(['h', 'e', 'l', 'l', 'o']);
reverseString(['H', 'a', 'n', 'n', 'a', 'h']);
