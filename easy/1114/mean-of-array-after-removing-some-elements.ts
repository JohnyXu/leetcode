function trimMean(arr: number[]): number {
  arr.sort((a, b) => a - b);
  const newArr: number[] = arr.filter((num, index) => {
    return index >= Math.floor(arr.length * 0.05) && index < Math.floor(arr.length * 0.95);
  });
  const sum: number = newArr.reduce((sum1, cur) => {
    return sum1 + cur;
  }, 0);
  const ret: number = parseFloat((Math.round((sum / newArr.length) * 100000) / 100000).toFixed(5));
  return ret;
}

console.log(trimMean([1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3]));
console.log(trimMean([6, 2, 7, 5, 1, 2, 0, 3, 10, 2, 5, 0, 5, 5, 0, 8, 7, 6, 8, 0]));
console.log(
  trimMean([
    6, 0, 7, 0, 7, 5, 7, 8, 3, 4, 0, 7, 8, 1, 6, 8, 1, 1, 2, 4, 8, 1, 9, 5, 4, 3, 8, 5, 10, 8, 6, 6,
    1, 0, 6, 10, 8, 2, 3, 4,
  ]),
);
