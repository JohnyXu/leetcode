// UNSOLVED
function productExceptSelf(nums: number[]): number[] {
  let ans: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    ans.push(
      nums.reduce((acc, cur, index) => {
        return acc * (index === i ? 1 : cur);
      }, 1),
    );
  }
  return ans;
}

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
