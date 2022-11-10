function canMakeArithmeticProgression(arr: number[]): boolean {
  arr.sort((a, b) => a - b);
  const num: number = arr[1] - arr[0];
  for (let i = 1; i < arr.length - 1; i++) {
    const different = arr[i + 1] - arr[i];
    if (different !== num) {
      return false;
    }
  }
  return true;
}

console.log(canMakeArithmeticProgression([3, 5, 1]));
console.log(canMakeArithmeticProgression([1, 2, 4]));
