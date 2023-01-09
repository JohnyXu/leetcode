/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
  let newArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    newArr.push(cur);
    if (cur === 0) {
      newArr.push(cur);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = newArr[i];
  }
  console.log(arr);
}

duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]);
duplicateZeros([1, 2, 3]);
duplicateZeros([8, 4, 5, 0, 0, 0, 0, 7]);
