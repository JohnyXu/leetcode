function sortArrayByParity(nums: number[]): number[] {
  const oddNums: number[] = nums.filter((num) => num % 2 === 1);
  const evenNums: number[] = nums.filter((num) => num % 2 === 0);
  return evenNums.concat(oddNums);
}
