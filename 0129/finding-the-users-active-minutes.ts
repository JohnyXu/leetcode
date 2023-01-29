function findingUsersActiveMinutes(logs: number[][], k: number): number[] {
  let ans: number[] = Array.from<number>({ length: k }).fill(0);

  let mapping = new Map();
  for (let i = 0; i < logs.length; i++) {
    const [first, second] = logs[i];
    mapping.set(first, [...(mapping.get(first) ?? []), second]);
  }
  for (const key of mapping.keys()) {
    const arr: number[] = mapping.get(key);
    const sets = new Set(arr);
    ans[sets.size - 1]++;
  }
  return ans;
}
