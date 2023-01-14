function canBeIncreasing(nums: number[]): boolean {
  if (nums.length <= 2) {
    return true;
  }
  for (let i = 0; i < nums.length; i++) {
    let prev: number = nums[0];
    let stop: boolean = false;

    if (i > 0 && i < nums.length - 1 && nums[i - 1] >= nums[i + 1]) {
      continue;
    }

    if (i > 0) {
      let nSign: number = -1;
      for (let left = 1; left < i; left++) {
        const cur = nums[left];
        if ((cur - prev) * nSign >= 0) {
          stop = true;
          break;
        }
        prev = cur;
      }
    }

    if (stop) {
      continue;
    }

    if (i < nums.length - 1) {
      prev = nums[i + 1];
      let nSign: number = -1;
      for (let right = i + 2; right < nums.length; right++) {
        const cur = nums[right];
        if (nSign * (cur - prev) >= 0) {
          stop = true;
          break;
        }
        prev = cur;
      }
    }

    if (!stop) {
      return true;
    }
  }
  return false;
}

// console.log(canBeIncreasing([1, 2, 10, 5, 7]));
// console.log(canBeIncreasing([2, 3, 1, 2]));
// console.log(canBeIncreasing([1, 1, 1]));
console.log(canBeIncreasing([103, 191, 918, 124, 658]));
