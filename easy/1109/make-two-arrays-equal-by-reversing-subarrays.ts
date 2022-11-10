function canBeEqual(target: number[], arr: number[]): boolean {
  target.sort((a, b) => a - b);
  arr.sort((a, b) => a - b);
  for (let i = 0; i < target.length; i++) {
    const num = target[i];
    if (num !== arr[i]) {
      return false;
    }
  }
  return true;
}

console.log(canBeEqual([1, 2, 3, 4], [2, 4, 1, 3]));
console.log(canBeEqual([3, 7, 9], [3, 7, 11]));
