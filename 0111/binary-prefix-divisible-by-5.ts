function prefixesDivBy5(nums: number[]): boolean[] {
  let valid: boolean[] = [];

  let prev: number = 0;
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    let num: number = prev * 2 + cur;
    if (num % 5 === 0) {
      valid.push(true);
    } else {
      valid.push(false);
    }
    prev = num % 100;
  }
  return valid;
}

console.log(prefixesDivBy5([0, 1, 1]));
console.log(prefixesDivBy5([1, 1, 1]));
console.log(
  prefixesDivBy5([
    1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1,
    1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1,
  ]),
);
