function checkInclusion(s1: string, s2: string): boolean {
  const need = new Map();
  const win = new Map();
  for (const ch of s1) {
    need.set(ch, (need.get(ch) ?? 0) + 1);
  }

  let left = 0;
  let right = 0;
  let valid = 0;
  while (right < s2.length) {
    let c = s2[right];
    right++;
    if (need.has(c)) {
      win.set(c, (win.get(c) ?? 0) + 1);
      if (win.get(c) === need.get(c)) {
        valid++;
      }
    }
    while (right - left >= s1.length) {
      if (valid === need.size) {
        return true;
      }
      let d = s2[left];
      left++;
      if (need.has(d)) {
        if (win.get(d) === need.get(d)) {
          valid--;
        }
        win.set(d, (win.get(d) ?? 0) - 1);
      }
    }
  }
  return false;
}
