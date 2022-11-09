function numberOfPairs(nums: number[]): number[] {
  let pairs: number[] = findPairs(nums);
  let count = 0;
  let newNums: number[] = nums;
  while (pairs.length > 0) {
    newNums = newNums.filter((num, index) => {
      return index !== pairs[0] && index != pairs[1];
    });
    pairs = findPairs(newNums);
    count += 1;
  }
  return [count, newNums.length];
}

function findPairs(nums: number[]): number[] {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        return [i, j];
      }
    }
  }
  return [];
}
