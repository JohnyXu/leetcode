class NumArray {
  preSums: number[];
  constructor(nums: number[]) {
    this.preSums = Array.from<number>({ length: nums.length + 1 }).fill(0);
    for (let i = 1; i < this.preSums.length; i++) {
      this.preSums[i] = this.preSums[i - 1] + nums[i - 1];
    }
  }

  sumRange(left: number, right: number): number {
    return this.preSums[right + 1] - this.preSums[left];
  }
}
