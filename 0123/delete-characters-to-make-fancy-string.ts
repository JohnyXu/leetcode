function makeFancyString(s: string): string {
  let ans: string = '';
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ans.length < 2) {
      ans += ch;
    } else {
      const len: number = ans.length;
      if (ans[len - 1] === ch && ans[len - 2] === ch) {
        continue;
      } else {
        ans += ch;
      }
    }
  }
  return ans;
}
