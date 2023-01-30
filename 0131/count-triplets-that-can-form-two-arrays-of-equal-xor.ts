// REVIEW
function countTriplets(arr: number[]): number {
  let n: number = arr.length;
  let pre: number[] = Array.from<number>({ length: n + 1 }).fill(0);
  for (let i = 0; i < n; i++) {
    pre[i + 1] = pre[i] ^ arr[i];
  }
  let count: number = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j; k < n; k++) {
        let a: number = pre[j] ^ pre[i];
        let b: number = pre[k + 1] ^ pre[j];
        if (a === b) {
          count += 1;
        }
      }
    }
  }
  return count;
}
