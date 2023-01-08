function similarPairs(words: string[]): number {
  let count: number = 0;

  let mapping: Map<string, Set<string>> = new Map<string, Set<string>>();
  for (let i = 0; i < words.length; i++) {
    let set1: Set<string> = new Set<string>();
    for (const ch of words[i]) {
      set1.add(ch);
    }
    mapping.set(words[i], set1);
  }

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length; j++) {
      let set1: Set<string> = mapping.get(words[i]) as Set<string>;
      let set2: Set<string> = mapping.get(words[j]) as Set<string>;
      if (set1.size !== set2.size) {
        continue;
      }
      let enable: boolean = true;
      for (const ch of set1) {
        if (!set2.has(ch)) {
          enable = false;
          break;
        }
      }
      if (enable) {
        count += 1;
      }
    }
  }
  return count;
}

console.log(similarPairs(['aba', 'aabb', 'abcd', 'bac', 'aabc']));
console.log(similarPairs(['aabb', 'ab', 'ba']));
console.log(similarPairs(['nba', 'cba', 'dba']));
