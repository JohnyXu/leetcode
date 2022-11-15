function threeConsecutiveOdds(arr: number[]): boolean {
  for (let i = 2; i < arr.length; i++) {
    const prevBefore: number = arr[i - 2];
    const prev: number = arr[i - 1];
    const current: number = arr[i];
    if (prevBefore % 2 === 1 && prev % 2 === 1 && current % 2 === 1) {
      return true;
    }
  }
  return false;
}

console.log(threeConsecutiveOdds([2, 6, 4, 1]));
console.log(threeConsecutiveOdds([1, 2, 34, 3, 4, 5, 7, 23, 12]));
