function largeGroupPositions(s: string): number[][] {
  let prev: string = s[0];
  let count: number = 1;
  let start: number = 0;
  let ans: number[][] = [];
  for (let i = 1; i < s.length; i++) {
    const cur = s[i];
    if (cur !== prev) {
      if (count >= 3) {
        ans.push([start, i - 1]);
      }
      count = 1;
      start = i;
    } else {
      count += 1;
    }
    prev = cur;
  }
  if (count >= 3) {
    ans.push([start, s.length - 1]);
  }
  return ans;
}
