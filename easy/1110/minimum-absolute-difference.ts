function minimumAbsDifference(arr: number[]): number[][] {
  arr.sort((a, b) => a - b);
  let min: number = Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    const current = arr[i];
    const next = arr[i + 1];
    if (Math.abs(next - current) < min) {
      min = Math.abs(next - current);
    }
  }

  let res: number[][] = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const current = arr[i];
    const next = arr[i + 1];
    if (Math.abs(next - current) === min) {
      res.push([current, next]);
    }
  }
  return res;
}

console.log(minimumAbsDifference([4, 2, 1, 3]));
console.log(minimumAbsDifference([1, 3, 6, 10, 15]));
console.log(minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]));
