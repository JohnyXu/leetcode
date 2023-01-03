function reverse(x: number): number {
  let negative = false;
  let start = 0;
  if (x < 0) {
    negative = true;
    start = 1;
  }
  const s: string = x.toString().substring(start).split('').reverse().join('');
  const reverseNum = negative ? parseInt('-' + s) : parseInt(s);
  if (reverseNum >= Math.pow(-2, 31) && reverseNum <= Math.pow(2, 31) - 1) {
    return reverseNum;
  }
  return 0;
}

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
