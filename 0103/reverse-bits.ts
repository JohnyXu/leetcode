function reverseBits(n: number): number {
  let s = n.toString(2);
  if (s.length < 32) {
    for (let i = s.length; i < 32; i++) {
      s = '0' + s;
    }
  }
  const arr: number[] = s
    .split('')
    .reverse()
    .map((val) => {
      return parseInt(val);
    });

  let num: number = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    num += arr[i] * Math.pow(2, arr.length - 1 - i);
  }
  return num;
}

console.log(reverseBits(43261596));
console.log(reverseBits(4294967293));
