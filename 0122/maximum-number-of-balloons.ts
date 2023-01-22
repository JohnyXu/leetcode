function maxNumberOfBalloons(text: string): number {
  const mapping: Map<string, number> = new Map<string, number>();
  const letters: string[] = text.split('');

  const sets: Set<string> = new Set<string>(['b', 'a', 'l', 'o', 'n']);
  for (const ch of letters) {
    if (sets.has(ch)) {
      mapping.set(ch, (mapping.get(ch) || 0) + 1);
    }
  }
  mapping.set('l', Math.floor((mapping.get('l') as number) / 2));
  mapping.set('o', Math.floor((mapping.get('o') as number) / 2));

  if (mapping.size < 5) {
    return 0;
  }

  let minimum: number = mapping.get('l') as number;
  for (const ch of mapping.keys()) {
    const count: number = mapping.get(ch) as number;
    if (count < minimum) {
      minimum = count;
    }
  }
  return minimum;
}
