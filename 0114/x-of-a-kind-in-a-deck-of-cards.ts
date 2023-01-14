function getMaxMod(a: number, b: number) {
  if (a < b) {
    [a, b] = [b, a];
  }

  let mod: number = a % b;
  while (mod) {
    a = b;
    b = mod;
    mod = a % b;
  }
  return b;
}

function hasGroupsSizeX(deck: number[]): boolean {
  if (deck.length < 2) {
    return false;
  }
  const mapping: Map<number, number> = new Map<number, number>();
  for (let i = 0; i < deck.length; i++) {
    const cur = deck[i];
    mapping.set(cur, (mapping.get(cur) || 0) + 1);
  }

  let minimum: number = deck.length;
  let counts: number[] = [];
  for (const key of mapping.keys()) {
    const c: number = mapping.get(key) as number;
    if (c < minimum) {
      minimum = c;
    }
    counts.push(c);
  }
  if (minimum === 1) {
    return false;
  }
  if (counts.length < 2) {
    return true;
  }

  let prev: number = counts[0];
  let maxMod: number = 10000;
  counts.sort((a, b) => a - b);
  for (let i = 1; i < counts.length; i++) {
    const cur = counts[i];
    let mod: number = getMaxMod(cur, prev);
    maxMod = Math.min(mod, maxMod);
    prev = mod;
  }
  if (maxMod === 1) {
    return false;
  }

  for (const key of mapping.keys()) {
    const c: number = mapping.get(key) as number;
    if (c % maxMod !== 0) {
      return false;
    }
  }
  return true;
}

// console.log(hasGroupsSizeX([1, 2, 3, 4, 4, 3, 2, 1]));
// console.log(hasGroupsSizeX([1, 1, 1, 2, 2, 2, 3, 3]));
// console.log(hasGroupsSizeX([1, 1, 1, 1, 2, 2, 2, 2, 2, 2]));
