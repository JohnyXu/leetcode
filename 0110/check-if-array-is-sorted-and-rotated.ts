function check(nums: number[]): boolean {
  let newNums: number[] = nums.map((val) => val);
  newNums.sort((a, b) => a - b);

  let maximumIdx = 0;
  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];
    if (cur > nums[maximumIdx]) {
      maximumIdx = i;
    } else if (cur === nums[maximumIdx] && maximumIdx + 1 === i) {
      maximumIdx = i;
    }
  }

  let fronts: number[] = [];
  let rears: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (i <= maximumIdx) {
      fronts.push(nums[i]);
    } else {
      rears.push(nums[i]);
    }
  }
  rears = rears.concat(fronts);
  for (let i = 0; i < newNums.length; i++) {
    const cur = newNums[i];
    if (cur !== rears[i]) {
      return false;
    }
  }
  return true;
}

console.log(check([3, 4, 5, 1, 2]));
console.log(check([2, 1, 3, 4]));
console.log(check([1, 2, 3]));
console.log(check([6, 7, 7, 5]));
console.log(check([10, 1, 4, 5, 10]));
