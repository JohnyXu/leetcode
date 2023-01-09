function isAlienSorted(words: string[], order: string): boolean {
  let mapping: Map<string, number> = new Map<string, number>();

  for (let i = 0; i < order.length; i++) {
    const cur = order[i];
    mapping.set(cur, i);
  }
  let wordsClone: string[] = words.map((val) => val);

  wordsClone.sort((a: string, b: string) => {
    let minLen: number = a.length > b.length ? b.length : a.length;

    for (let i = 0; i < minLen; i++) {
      let diff: number = (mapping.get(a[i]) as number) - (mapping.get(b[i]) as number);
      if (diff !== 0) {
        return diff;
      }
    }
    return a.length - b.length;
  });

  for (let i = 0; i < words.length; i++) {
    const cur = words[i];
    if (cur !== wordsClone[i]) {
      return false;
    }
  }
  return true;
}

console.log(isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz'));
console.log(isAlienSorted(['word', 'world', 'row'], 'worldabcefghijkmnpqstuvxyz'));
console.log(isAlienSorted(['apple', 'app'], 'abcdefghijklmnopqrstuvwxyz'));
