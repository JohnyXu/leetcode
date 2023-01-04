function firstUniqChar(s: string): number {
  let mapping: Map<string, number> = new Map<string, number>();
  for (let i = s.length - 1; i >= 0; i--) {
    const cur: string = s[i];
    mapping.set(cur, (mapping.get(cur) || 0) + 1);
  }
  let sets: Set<string> = new Set<string>();
  for (const key of mapping.keys()) {
    const value: number = mapping.get(key) as number;
    if (value <= 1) {
      sets.add(key);
    }
  }
  if (sets.size <= 0) {
    return -1;
  }
  for (let i = 0; i < s.length; i++) {
    if (sets.has(s[i])) {
      return i;
    }
  }
  return -1;
}

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('aabb'));
