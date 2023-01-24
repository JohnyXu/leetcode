function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const mapping = new Map();
  const sets = new Set();
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (mapping.has(ch)) {
      const tCh: string = mapping.get(ch);
      if (tCh !== t[i]) {
        return false;
      }
    } else {
      if (sets.has(t[i])) {
        return false;
      }
      mapping.set(ch, t[i]);
      sets.add(t[i]);
    }
  }
  return true;
}
