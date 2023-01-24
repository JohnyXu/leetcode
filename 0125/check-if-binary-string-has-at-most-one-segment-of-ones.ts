function checkOnesSegment(s: string): boolean {
  if (s.length === 1) {
    return true;
  }
  let prev: string = s[0];
  let count: number = 1;
  let ans: number[] = [];
  for (let i = 1; i < s.length; i++) {
    const cur: string = s[i];
    if (cur !== prev) {
      if (count >= 1) {
        ans.push(count);
      }
      if (cur === '1') {
        count = 1;
      } else {
        count = 0;
      }
    } else {
      if (cur === '1') {
        count += 1;
      }
    }
    prev = cur;
  }
  if (count > 0) {
    ans.push(count);
  }
  return ans.length === 1;
}
