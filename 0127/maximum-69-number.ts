function maximum69Number(num: number): number {
  let nums: number[] = [];
  let target: number = num;

  while (target !== 0) {
    let val: number = target % 10;
    nums.push(val);
    target = Math.floor(target / 10);
  }
  nums = nums.reverse();
  let found: boolean = false;
  for (let i = 0; i < nums.length; i++) {
    let cur: number = nums[i];
    if (cur === 6) {
      nums[i] = 9;
      found = true;
      break;
    }
  }
  if (found) {
    return +nums.join('');
  }

  return +nums.join('');
}
