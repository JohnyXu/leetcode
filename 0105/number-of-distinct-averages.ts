function distinctAverages(nums: number[]): number {
  const sortNums: number[] = nums.sort((a, b) => a - b);

  const sets: Set<number> = new Set<number>();
  for (let i = 0; i < sortNums.length / 2; i++) {
    const average: number = sortNums[i] + sortNums[sortNums.length - 1 - i];
    sets.add(average);
  }
  return sets.size;
}

console.log(distinctAverages([4, 1, 4, 0, 3, 5]));
console.log(distinctAverages([1, 100]));
