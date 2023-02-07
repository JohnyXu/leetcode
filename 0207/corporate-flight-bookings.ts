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

function corpFlightBookings(bookings: number[][], n: number): number[] {
  let nums: number[] = Array.from<number>({ length: n }).fill(0);
  build(nums);
  for (let i = 0; i < bookings.length; i++) {
    const [first, second, val] = bookings[i];
    increament(first - 1, second - 1, val);
  }
  return result();
}
