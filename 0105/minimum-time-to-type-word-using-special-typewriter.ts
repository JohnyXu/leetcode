function minTimeToType(word: string): number {
  let count: number = 0;

  let start = 'a';
  for (let i = 0; i < word.length; i++) {
    const cur = word[i];
    let step: number = 0;
    if (cur.charCodeAt(0) - start.charCodeAt(0) > 0) {
      step = Math.min(
        cur.charCodeAt(0) - start.charCodeAt(0),
        start.charCodeAt(0) - cur.charCodeAt(0) + 26,
      );
    } else {
      step = Math.min(
        cur.charCodeAt(0) - start.charCodeAt(0) + 26,
        start.charCodeAt(0) - cur.charCodeAt(0),
      );
    }
    start = cur;
    count += step + 1;
  }
  return count;
}

console.log(minTimeToType('abc'));
console.log(minTimeToType('bza'));
console.log(minTimeToType('zjpc'));
