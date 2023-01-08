function findLHS(nums: number[]): number {
  let maxCount: number = 0;
  let i = 0;
  let sets: Set<number> = new Set<number>();
  while (true) {
    const cur = nums[i];
    if (sets.has(cur)) {
      i++;
    }
    let ans: number[] = [];
    ans.push(cur);
    let set1s: Set<number> = new Set<number>();
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] - cur === 1) {
        ans.push(nums[j]);
        set1s.add(1);
      }
      if (nums[j] - cur === 0) {
        ans.push(nums[j]);
      }
    }
    if (ans.length > maxCount && set1s.has(1)) {
      maxCount = ans.length;
    }

    ans = [];
    set1s = new Set<number>();
    ans.push(cur);
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] - cur === -1) {
        ans.push(nums[j]);
        set1s.add(-1);
      }

      if (nums[j] - cur === 0) {
        ans.push(nums[j]);
      }
    }
    if (ans.length > maxCount && set1s.has(-1)) {
      maxCount = ans.length;
    }
    sets.add(cur);
    if (i >= nums.length) {
      break;
    }
  }
  return maxCount < 2 ? 0 : maxCount;
}

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]));
console.log(findLHS([1, 2, 3, 4]));
console.log(findLHS([1, 1, 1, 1]));
