function isSubsequence(s: string, t: string): boolean {
  let si: number = 0;
  for (let i = 0; i < t.length; i++) {
    const ch = t[i];
    const sCh: string = s[si];
    if (ch === sCh) {
      si++;
    }
  }
  if (si === s.length) {
    return true;
  }
  return false;
}
