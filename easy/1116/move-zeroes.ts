/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === 0 && nums[j]) {
        const temp: number = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        break;
      }
    }
  }
}
// console.log(nums);

console.log(moveZeroes([0, 1, 0, 3, 12]));
