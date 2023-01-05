function generateEvenString(n: number, s: string) {
  let index: number = Math.floor(Math.random() * s.length);
  const ch1: string = s.substring(index, index + 1);

  let newString: string = s
    .split('')
    .filter((ch, i) => i !== index)
    .join('');
  let index2: number = Math.floor(Math.random() * newString.length);
  const ch2: string = newString.substring(index2, index2 + 1);

  return (
    Array.from({ length: n - 1 })
      .fill(ch1)
      .join('') + ch2
  );
}

function generateTheString(n: number): string {
  let s: string = 'abcdefghijklmnopqrstuvwxyz';
  if (n % 2 === 0) {
    return generateEvenString(n, s);
  } else {
    let index: number = Math.floor(Math.random() * s.length);
    const ch1: string = s.substring(index, index + 1);
    let newString: string = s
      .split('')
      .filter((ch, i) => i !== index)
      .join('');

    if (n == 1) {
      return ch1;
    }
    return ch1 + generateEvenString(n - 1, newString);
  }
}

console.log(generateTheString(4));
console.log(generateTheString(2));
console.log(generateTheString(7));
