function findWords(words: string[]): string[] {
  const set1: Set<string> = new Set('qwertyuiop'.split(''));
  const set2: Set<string> = new Set('asdfghjkl'.split(''));
  const set3: Set<string> = new Set('zxcvbnm'.split(''));

  return words.filter((word) => {
    const arr: string[] = word.split('');
    const first: string = arr[0].toLowerCase();

    if (set1.has(first)) {
      for (const ch of arr) {
        const newCh = ch.toLowerCase();
        if (set2.has(newCh) || set3.has(newCh)) {
          return false;
        }
      }
    } else if (set2.has(first)) {
      for (const ch of arr) {
        const newCh = ch.toLowerCase();
        if (set1.has(newCh) || set3.has(newCh)) {
          return false;
        }
      }
    } else if (set3.has(first)) {
      for (const ch of arr) {
        const newCh = ch.toLowerCase();
        if (set1.has(newCh) || set2.has(newCh)) {
          return false;
        }
      }
    }
    return true;
  });
}

console.log(findWords(['Hello', 'Alaska', 'Dad', 'Peace']));
console.log(findWords(['omk']));
console.log(findWords(['adsdf', 'sfd']));
