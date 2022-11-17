function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  let set2: Set<number> = new Set(arr2);
  let left: number[] = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!set2.has(arr1[i])) {
      left.push(arr1[i]);
    }
  }
  left.sort((a, b) => a - b);
  let res: number[] = [];
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] === arr2[i]) {
        res.push(arr2[i]);
      }
    }
  }
  return res.concat(left);
}

console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]));
console.log(relativeSortArray([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]));
