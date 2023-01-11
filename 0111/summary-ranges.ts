function summaryRanges(nums: number[]): string[] {
  if (nums.length <= 0) {
    return [];
  }
  let ans: number[][] = [];

  let prev: number = 0;
  let arr: number[] = [];
  arr.push(nums[prev]);
  for (let i = 1; i < nums.length; i++) {
    const ele = nums[i];
    console.log();

    if (nums[prev] + 1 === ele) {
      arr.push(ele);
    } else {
      ans.push(arr);
      arr = [];
      arr.push(ele);
    }
    prev = i;
  }
  if (arr.length > 0) {
    ans.push(arr);
  }

  return ans.map((arr) => {
    if (arr.length === 1) {
      return arr[0].toString();
    }
    return `${arr[0]}->${arr[arr.length - 1]}`;
  });
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
