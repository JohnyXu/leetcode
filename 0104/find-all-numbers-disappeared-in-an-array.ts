function findDisappearedNumbers(nums: number[]): number[] {
  let ans: number[] = [];
  let sets: Set<number> = new Set<number>();
  for (const num of nums) {
    sets.add(num);
  }
  for (let i = 0; i < nums.length; i++) {
    const num: number = i + 1;
    if (!sets.has(num)) {
      ans.push(num);
    }
  }
  return ans;
}

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
