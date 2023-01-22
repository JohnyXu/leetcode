function maxPower(s: string): number {
  let maximum: number = s.length > 0 ? 1 : 0;
  let prev: string = s[0];
  let count: number = 1;
  for (let i = 1; i < s.length; i++) {
    const cur = s[i];
    if (cur === prev) {
      count++;
    } else {
      if (count > maximum) {
        maximum = count;
      }
      count = 1;
    }
    prev = cur;
  }
  if (count > maximum) {
    maximum = count;
  }
  return maximum;
}
