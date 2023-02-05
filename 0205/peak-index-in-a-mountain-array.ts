function peakIndexInMountainArray(arr: number[]): number {
  let peakIdx: number = -1;
  let sign: number = 1;

  let prev: number = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i];
    if ((cur - prev) * sign < 0) {
      peakIdx = i - 1;
      sign = -1;
    }
    prev = cur;
  }
  return peakIdx;
}
