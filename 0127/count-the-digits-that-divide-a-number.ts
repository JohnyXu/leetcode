function countDigits(num: number): number {
  let target: number = num;
  let nums: number[] = [];
  while (num !== 0) {
    nums.push(num % 10);
    num = Math.floor(num / 10);
  }
  let count: number = 0;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (target % n === 0) {
      count++;
    }
  }
  return count;
}
