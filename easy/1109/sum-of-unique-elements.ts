function sumOfUnique(nums: number[]): number {
  const countMap: { [key: number]: number } = {};
  nums.forEach((num) => {
    countMap[num] = (countMap[num] || 0) + 1;
  });
  let sum = 0;
  for (const [key, count] of Object.entries(countMap)) {
    sum = sum + (count <= 1 ? parseInt(key, 10) : 0);
  }
  console.log(sum);

  return sum;
}

sumOfUnique([1, 2, 3, 2]);
