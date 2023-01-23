function rearrangeCharacters(s: string, target: string): number {
  let sets: Set<string> = new Set<string>();
  for (let i = 0; i < target.length; i++) {
    const ch = target[i];
    sets.add(ch);
  }

  const mapping: Map<string, number> = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (sets.has(ch)) {
      mapping.set(ch, (mapping.get(ch) || 0) + 1);
    }
  }

  if (mapping.size < sets.size) {
    return 0;
  }

  let count: number = 0;
  while (true) {
    let finish: boolean = false;
    for (let i = 0; i < target.length; i++) {
      const ch = target[i];
      if (mapping.has(ch)) {
        const cnt: number = mapping.get(ch) as number;
        if (cnt > 0) {
          mapping.set(ch, (mapping.get(ch) as number) - 1);
        } else {
          finish = true;
          break;
        }
      }
    }
    if (finish) {
      break;
    } else {
      count++;
    }
  }
  return count;
}
