function uncommonFromSentences(s1: string, s2: string): string[] {
  const mapping: Map<string, number> = new Map<string, number>();

  const s1Arr: string[] = s1.split(' ');
  const s2Arr: string[] = s2.split(' ');

  for (let i = 0; i < s1Arr.length; i++) {
    const cur = s1Arr[i];
    mapping.set(cur, (mapping.get(cur) || 0) + 1);
  }
  for (let i = 0; i < s2Arr.length; i++) {
    const cur = s2Arr[i];
    mapping.set(cur, (mapping.get(cur) || 0) + 1);
  }
  let ans: string[] = [];
  for (const key of mapping.keys()) {
    const count: number = mapping.get(key) as number;
    if (count < 2) {
      ans.push(key);
    }
  }
  return ans;
}
