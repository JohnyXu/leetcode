function countDistinctIntegers(nums: number[]): number {
  const reverse: number[] = nums.map((val) => {
    return +val.toString().split('').reverse().join('');
  });
  let arr: number[] = nums.concat(reverse);
  let sets = new Set();
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    sets.add(n);
  }
  return sets.size;
}
