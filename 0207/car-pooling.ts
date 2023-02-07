let diff: number[] = [];

function build(nums: number[]) {
  diff = Array.from<number>({ length: nums.length }).fill(0);
  diff[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    diff[i] = nums[i] - nums[i - 1];
  }
}

function increament(i: number, j: number, val: number) {
  diff[i] += val;
  if (j + 1 < diff.length) {
    diff[j + 1] -= val;
  }
}

function result() {
  let res: number[] = Array.from<number>({ length: diff.length }).fill(0);
  res[0] = diff[0];
  for (let i = 1; i < diff.length; i++) {
    res[i] = res[i - 1] + diff[i];
  }
  return res;
}

function carPooling(trips: number[][], capacity: number): boolean {
  let nums: number[] = Array.from<number>({ length: 1001 }).fill(0);
  build(nums);
  for (const trip of trips) {
    const [val, i, j] = trip;
    increament(i, j - 1, val);
  }
  let res: number[] = result();
  for (let i = 0; i < res.length; i++) {
    const n = res[i];
    if (capacity < n) {
      return false;
    }
  }
  return true;
}
