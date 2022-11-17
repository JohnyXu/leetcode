function findMiddleIndex(nums: number[]): number {
  let sumLeft: number = 0;
  let sumRight: number = 0;
  for (let i = 0; i < nums.length; i++) {
    const rest: number[] = nums.filter((val, index) => {
      return index > i;
    });

    if (i === nums.length - 1) {
      sumRight = 0;
    } else {
      sumRight = rest.reduce((sum, num) => {
        return sum + num;
      }, 0);
    }
    if (sumLeft === sumRight) {
      return i;
    }
    sumLeft += nums[i];
  }
  return -1;
}

console.log(findMiddleIndex([2, 3, -1, 8, 4]));
console.log(findMiddleIndex([1, -1, 4]));
console.log(findMiddleIndex([2, 5]));
