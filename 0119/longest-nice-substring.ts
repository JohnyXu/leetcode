function longestNiceSubstring(s: string): string {
  let maxSub: string = '';
  for (let i = 0; i < s.length - 1; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const sub: string = s.substring(i, j + 1);
      let sets: Set<string> = new Set<string>();
      for (const ch of sub) {
        sets.add(ch);
      }
      if (sets.size % 2 != 0) {
        continue;
      }

      let find: boolean = true;
      for (const ch of sets.keys()) {
        if (ch >= 'A' && ch <= 'Z') {
          const lower: string = ch.toLowerCase();
          if (!sets.has(lower)) {
            find = false;
            break;
          }
        }

        if (ch >= 'a' && ch <= 'z') {
          const upper: string = ch.toUpperCase();
          if (!sets.has(upper)) {
            find = false;
            break;
          }
        }
      }
      if (find) {
        if (sub.length > maxSub.length) {
          maxSub = sub;
        }
      }
    }
  }
  return maxSub;
}
