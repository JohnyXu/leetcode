function repeatedCharacter(s: string): string {
  let mapping: Map<string, number> = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    mapping.set(s[i], (mapping.get(s[i]) || 0) + 1);
    if ((mapping.get(s[i]) as number) >= 2) {
      return s[i];
    }
  }
  if ((mapping.get(s[s.length - 1]) as number) >= 2) {
    return s[s.length - 1];
  }
  return '';
}

console.log(repeatedCharacter('abccbaacz'));
console.log(repeatedCharacter('abcdd'));
console.log(repeatedCharacter('"abccbaacz"'));
