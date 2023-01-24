function secondHighest(s: string): number {
  const sets: Set<number> = new Set<number>();
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    const chCode: number = ch.charCodeAt(0);
    if (chCode >= '0'.charCodeAt(0) && chCode <= '9'.charCodeAt(0)) {
      sets.add(+ch);
    }
  }

  let maximum: number = -1;
  let second: number = -1;

  for (const num of sets.keys()) {
    if (maximum < num) {
      if (maximum !== second) {
        second = maximum;
      }
      maximum = num;
    } else if (second < num) {
      second = num;
    }
  }
  if (maximum === second) {
    return -1;
  }
  return second;
}
