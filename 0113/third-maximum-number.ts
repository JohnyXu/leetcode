function thirdMax(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(nums[0], nums[1]);
  }

  let minimum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];
    if (cur < minimum) {
      minimum = cur;
    }
  }
  let first: number = minimum;
  let second: number = minimum;
  let third: number = minimum;

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (cur > first) {
      if (second > third) {
        third = second;
      }
      if (first > second) {
        second = first;
      }

      first = cur;
    } else if (cur > second && cur !== first) {
      if (second > third) {
        third = second;
      }
      second = cur;
    } else if (cur > third && cur !== first && cur !== second) {
      third = cur;
    }
  }

  if (second === third || first === third) {
    return first;
  }
  return third;
}

// console.log(thirdMax([3, 2, 1]));
// console.log(thirdMax([1, 2]));
console.log(thirdMax([2, 2, 3, 1]));
