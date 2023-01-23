function canConstruct(ransomNote: string, magazine: string): boolean {
  const mapping1: Map<string, number> = new Map<string, number>();
  const mapping2: Map<string, number> = new Map<string, number>();

  for (let i = 0; i < ransomNote.length; i++) {
    const ch = ransomNote[i];
    mapping1.set(ch, (mapping1.get(ch) || 0) + 1);
  }
  for (let i = 0; i < magazine.length; i++) {
    const ch = magazine[i];
    if (mapping1.has(ch)) {
      mapping2.set(ch, (mapping2.get(ch) || 0) + 1);
    }
  }
  if (mapping1.size > mapping2.size) {
    return false;
  }

  for (const key of mapping1.keys()) {
    const count1: number = mapping1.get(key) as number;
    const count2: number = mapping2.get(key) ?? 0;
    if (count1 > count2) {
      return false;
    }
  }
  return true;
}
