function minSetSize(arr: number[]): number {
  let mapping = new Map();
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    mapping.set(cur, (mapping.get(cur) ?? 0) + 1);
  }
  let n = arr.length;
  let pairs: number[][] = [];
  for (const k of mapping.keys()) {
    const count = mapping.get(k);
    pairs.push([k, count]);
  }
  pairs.sort((a, b) => {
    return b[1] - a[1];
  });

  let ans: number = 0;
  let len: number = 0;
  for (let i = 0; i < pairs.length; i++) {
    const [k, count] = pairs[i];
    len += count;
    ans += 1;
    if (len >= Math.ceil(n / 2)) {
      break;
    }
  }
  return ans;
}
