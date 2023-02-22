function minimumRounds(tasks: number[]): number {
  const mapping = new Map();
  for (const tk of tasks) {
    mapping.set(tk, (mapping.get(tk) ?? 0) + 1);
  }
  let ans: number = 0;
  for (const key of mapping.keys()) {
    let count = mapping.get(key);
    while (count >= 5) {
      count -= 3;
      ans += 1;
    }
    if (count === 4) {
      ans += 2;
    } else if (count >= 2) {
      ans += 1;
    } else {
      ans = -1;
      break;
    }
  }
  return ans;
}
