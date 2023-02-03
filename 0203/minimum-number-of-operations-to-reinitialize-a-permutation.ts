function reinitializePermutation(n: number): number {
  let count: number = 0;
  let nums: number[] = [];
  let arr: number[] = [];
  let perm: number[] = [];

  for (let i = 0; i < n; i++) {
    nums.push(i);
    arr.push(i);
    perm.push(i);
  }
  while (true) {
    for (let i = 0; i < n; i++) {
      if (i % 2 === 0) {
        arr[i] = perm[i / 2];
      } else {
        arr[i] = perm[n / 2 + (i - 1) / 2];
      }
    }
    for (let i = 0; i < n; i++) {
      perm[i] = arr[i];
    }

    let equal: boolean = true;
    for (let i = 0; i < n; i++) {
      if (nums[i] !== arr[i]) {
        equal = false;
        count += 1;
        break;
      }
    }
    if (equal) {
      break;
    }
  }
  return count + 1;
}
