function findSpecialInteger(arr: number[]): number {
  let mapping: Map<number, number> = new Map<number, number>();
  for (let i = 0; i < arr.length; i++) {
    const num: number = arr[i];
    mapping.set(num, (mapping.get(num) || 0) + 1);
  }
  const hhLen = Math.floor(arr.length / 4);
  let ans: number = -1;
  for (const key of mapping.keys()) {
    const count: number = mapping.get(key) as number;
    if (count > hhLen) {
      ans = key;
      break;
    }
  }
  return ans;
}

console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]));
console.log(findSpecialInteger([1, 1]));
