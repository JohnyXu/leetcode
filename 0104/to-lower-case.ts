function toLowerCase(s: string): string {
  return s
    .split('')
    .map((ch) => {
      const chCode: number = ch.charCodeAt(0);
      if (chCode >= 'a'.charCodeAt(0) && chCode <= 'z'.charCodeAt(0)) {
        return ch;
      }
      if (chCode >= 'A'.charCodeAt(0) && chCode <= 'Z'.charCodeAt(0)) {
        return String.fromCharCode(chCode + 'a'.charCodeAt(0) - 'A'.charCodeAt(0));
      }
      return ch;
    })
    .join('');
}

console.log(toLowerCase('Hello'));
console.log(toLowerCase('here'));
console.log(toLowerCase('LOVELY'));
