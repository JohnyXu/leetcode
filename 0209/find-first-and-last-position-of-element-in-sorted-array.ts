function leftBound(nums: number[], target: number) {
  let left: number = 0;
  let right: number = nums.length;
  while (left < right) {
    let mid: number = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      right = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid;
    }
  }
  if (left === nums.length) {
    return -1;
  }
  if (nums[left] === target) {
    return left;
  }
  return -1;
}

function rightBound(nums: number[], target: number) {
  let left: number = 0;
  let right: number = nums.length - 1;
  while (left <= right) {
    let mid: number = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      left = mid + 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  if (left - 1 < 0) {
    return -1;
  }
  if (nums[left - 1] === target) {
    return left - 1;
  }
  return -1;
}

function searchRange(nums: number[], target: number): number[] {
  let left: number = leftBound(nums, target);
  let right: number = rightBound(nums, target);
  return [left, right];
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 0));
