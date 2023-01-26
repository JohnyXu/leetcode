function buddyStrings(s: string, goal: string): boolean {
  if (s.length !== goal.length) {
    return false;
  }
  let count: number = 0;
  let arr: number[] = [];
  const mapping = new Map();
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch !== goal[i]) {
      count += 1;
      if (count >= 3) {
        return false;
      }
      arr.push(i);
    }
    mapping.set(ch, (mapping.get(ch) ?? 0) + 1);
  }
  if (arr.length > 2 || arr.length === 1) {
    return false;
  }
  if (arr.length === 0) {
    for (const key of mapping.keys()) {
      const cnt: number = mapping.get(key);
      if (cnt >= 2) {
        return true;
      }
    }
    return false;
  }
  const [first, second] = arr;
  return s[first] === goal[second] && s[second] === goal[first];
}
