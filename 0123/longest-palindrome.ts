function longestPalindrome(s: string): number {
  const mapping: Map<string, number> = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    mapping.set(ch, (mapping.get(ch) ?? 0) + 1);
  }

  let total: number = 0;
  let hasOdd: boolean = false;
  for (const key of mapping.keys()) {
    const count: number = mapping.get(key) ?? 0;
    if (count % 2 === 0) {
      total += count;
    } else {
      hasOdd = true;
      total += count - 1;
    }
  }
  if (hasOdd) {
    total += 1;
  }
  return total;
}
