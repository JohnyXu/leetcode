function replaceElements(arr: number[]): number[] {
  let res: number[] = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let max = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > max) {
        max = arr[j];
      }
    }
    res.push(max);
  }
  res.push(-1);
  return res;
}
