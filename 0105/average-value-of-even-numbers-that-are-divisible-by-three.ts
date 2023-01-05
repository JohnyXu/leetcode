function averageValue(nums: number[]): number {
  const filterNums: number[] = nums.filter((value) => {
    return value % 2 === 0 && value % 3 === 0;
  });

  if (filterNums.length === 0) {
    return 0;
  }
  return Math.floor(
    filterNums.reduce((acc, cur) => {
      return acc + cur;
    }, 0) / filterNums.length,
  );
}

console.log(averageValue([1, 3, 6, 10, 12, 15]));
console.log(averageValue([1, 2, 4, 7, 10]));
console.log(
  averageValue([
    94, 65, 82, 40, 79, 74, 92, 84, 37, 19, 16, 85, 20, 79, 25, 89, 55, 67, 84, 3, 79, 38, 16, 44,
    2, 54, 58, 94, 69, 71, 14, 24, 13, 21,
  ]),
);
