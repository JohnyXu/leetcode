class NumArray {
  nums: number[];
  constructor(nums: number[]) {
    this.nums = nums;
  }

  sumRange(left: number, right: number): number {
    let sum: number = 0;
    for (let i = left; i <= right; i++) {
      const cur = this.nums[i];
      sum += cur;
    }
    return sum;
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
