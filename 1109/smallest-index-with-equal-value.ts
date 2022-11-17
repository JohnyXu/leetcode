function smallestEqual(nums: number[]): number {
  const newNums: number[] = nums
    .map((num, index) => {
      return { num, index };
    })
    .filter(({ num, index }) => {
      return index % 10 === nums[index];
    })
    .sort((a, b) => {
      return a.index - b.index;
    })
    .map(({ index, num }) => {
      return index;
    });
  if (newNums.length <= 0) {
    return -1;
  }
  return newNums[0];
}

// console.log(smallestEqual([0, 1, 2]));
// console.log(smallestEqual([4, 3, 2, 1]));
// console.log(smallestEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(smallestEqual([7, 8, 3, 5, 2, 6, 3, 1, 1, 4, 5, 4, 8, 7, 2, 0, 9, 9, 0, 5, 7, 1, 6]));
console.log(
  smallestEqual([
    6, 5, 4, 4, 9, 1, 5, 0, 8, 8, 5, 8, 0, 9, 8, 3, 6, 5, 2, 7, 7, 6, 6, 8, 9, 6, 5, 6, 5, 6, 8, 6,
    9, 5, 1, 0, 5, 5,
  ]),
);
