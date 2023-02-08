function findAnagrams(s: string, p: string): number[] {
  let need = new Map();
  let win = new Map();
  for (const c of p) {
    need.set(c, (need.get(c) ?? 0) + 1);
  }

  let left = 0;
  let right = 0;
  let valid = 0;
  let res: number[] = [];
  while (right < s.length) {
    let c = s[right];
    right++;
    if (need.has(c)) {
      win.set(c, (win.get(c) ?? 0) + 1);
      if (win.get(c) === need.get(c)) {
        valid++;
      }
    }
    while (right - left >= p.length) {
      if (valid === need.size) {
        res.push(left);
      }
      let d = s[left];
      left++;
      if (need.has(d)) {
        if (win.get(d) === need.get(d)) {
          valid--;
        }
        win.set(d, (win.get(d) ?? 0) - 1);
      }
    }
  }
  return res;
}
