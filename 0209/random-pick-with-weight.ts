class Solution {
  preSum: number[];

  constructor(w: number[]) {
    let n: number = w.length;
    let preSum: number[] = Array.from<number>({ length: n + 1 }).fill(0);
    preSum[0] = 0;

    for (let i = 1; i <= n; i++) {
      preSum[i] = preSum[i - 1] + w[i - 1];
    }
    this.preSum = preSum;
  }

  pickIndex(): number {
    let n = this.preSum.length;
    let target: number = 1 + Math.floor(Math.random() * this.preSum[n - 1]);
    return this.left_bound(this.preSum, target) - 1;
  }

  left_bound(nums: number[], target: number): number {
    if (nums.length === 0) {
      return -1;
    }
    let left = 0;
    let right = nums.length;
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
    return left;
  }
}
