function getLucky(s: string, k: number): number {
  let nums: number[] = s
    .split('')
    .map((ch) => {
      return ch.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    })
    .join('')
    .split('')
    .map((val) => parseInt(val));

  let i = 0;
  let ans: string = '';
  while (i < k) {
    let sum: number = nums.reduce((acc, cur) => acc + cur, 0);
    ans = sum.toString();
    nums = ans.split('').map((val) => parseInt(val));
    i++;
  }
  return parseInt(ans);
}
