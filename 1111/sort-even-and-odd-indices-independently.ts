function sortEvenOdd(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums;
  }

  const odds: number[] = nums.filter((num, index) => index % 2 === 1);
  const evens: number[] = nums.filter((num, index) => index % 2 === 0);
  odds.sort((a, b) => b - a);
  evens.sort((a, b) => a - b);
  let res: number[] = [];
  const len: number = nums.length;
  const isCountOdd: boolean = len % 2 === 1;
  for (let i = 0; i < Math.floor(nums.length / 2); i++) {
    res.push(evens[i]);
    res.push(odds[i]);
  }
  if (isCountOdd) {
    res.push(evens[evens.length - 1]);
  }
  return res;
}

// console.log(sortEvenOdd([4, 1, 2, 3]));
// console.log(sortEvenOdd([2, 1]));
// console.log(sortEvenOdd([36, 45, 32, 31, 15, 41, 9, 46, 36, 6, 15, 16, 33, 26, 27, 31, 44, 34]));
// [6,45,16,41,26,33,32,31,34,31,36,27,36,15,44,15,46,9]
// [9,46,15,45,15,41,27,34,32,31,33,31,36,26,36,16,44,6]
console.log(sortEvenOdd([5, 39, 33, 5, 12, 27, 20, 45, 14, 25, 32, 33, 30, 30, 9, 14, 44, 15, 21]));
// [5,45,9,39,12,33,14,30,20,27,21,25,30,15,32,14,33,5,5]
// [5,45,9,39,12,33,14,30,20,27,21,25,30,15,32,14,33,5,44]
