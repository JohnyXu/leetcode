function frequencySort(nums: number[]): number[] {
  const mMap = new Map<number, number>();
  for (const num of nums) {
    mMap.set(num, (mMap.get(num) ?? 0) + 1);
  }
  return nums.sort((a, b) => (mMap.get(a) as number) - (mMap.get(b) as number) || b - a);

  // let numMap: { [key: string]: number } = {};
  // nums.forEach((num: number) => {
  //   numMap[num] = (numMap[num] || 0) + 1;
  // });

  // return Object.entries(numMap)
  //   .sort((a: [string, number], b: [string, number]) => {
  //     const [num1, count1] = a;
  //     const [num2, count2] = b;
  //     if (count1 !== count2) {
  //       return count1 - count2;
  //     }
  //     return parseInt(num2, 10) - parseInt(num1, 10);
  //   })
  //   .map(([key, count]) => {
  //     return Array.from({ length: count }, (k, v) => parseInt(key, 10));
  //   })
  //   .flat();
}

console.log(frequencySort([1, 1, 2, 2, 2, 3]));
console.log(frequencySort([2, 3, 1, 3, 2]));
console.log(frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1]));
