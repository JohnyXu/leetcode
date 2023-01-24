function wordPattern(pattern: string, s: string): boolean {
  const arr: string[] = s.split(' ');
  const pArr: string[] = pattern.split('');

  if (arr.length !== pArr.length) {
    return false;
  }
  const mapping = new Map();
  const sets = new Set();
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    const ch = pArr[i];
    if (mapping.has(ch)) {
      const oWord: string = mapping.get(ch);
      if (oWord !== word) {
        return false;
      }
    } else {
      if (sets.has(word)) {
        return false;
      }
      sets.add(word);
      mapping.set(ch, word);
    }
  }
  return true;
}
