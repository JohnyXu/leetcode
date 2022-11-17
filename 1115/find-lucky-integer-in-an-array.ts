function findLucky(arr: number[]): number {
  const arrMap: Map<number, number> = new Map<number, number>();
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    arrMap.set(current, (arrMap.get(current) || 0) + 1);
  }
  let max: number = -1;
  for (const [key, count] of arrMap) {
    if (key === count && key > max) {
      max = key;
    }
  }
  return max;
}

console.log(findLucky([2, 2, 3, 4]));
console.log(findLucky([1, 2, 2, 3, 3, 3]));
console.log(findLucky([2, 2, 2, 3, 3]));
