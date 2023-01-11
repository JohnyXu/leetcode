function nextGreatestLetter(letters: string[], target: string): string {
  let minimum: number = 27;
  let findCh: string = '';
  for (let i = 0; i < letters.length; i++) {
    const cur = letters[i];
    const diff: number = cur.charCodeAt(0) - target.charCodeAt(0);
    if (diff > 0) {
      if (diff < minimum) {
        minimum = diff;
        findCh = cur;
      }
    }
  }
  return findCh ? findCh : letters[0];
}

console.log(nextGreatestLetter(['c', 'f', 'j'], 'a'));
console.log(nextGreatestLetter(['c', 'f', 'j'], 'c'));
console.log(nextGreatestLetter(['x', 'x', 'y', 'y'], 'z'));
