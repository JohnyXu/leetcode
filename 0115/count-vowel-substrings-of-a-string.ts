function isVowelCh(ch: string) {
  return ['a', 'e', 'i', 'o', 'u'].includes(ch);
}

function isValidArr(arr: string[]) {
  return new Set(arr).size === 5;
}

function countVowelSubstrings(word: string): number {
  let left: number = 0;
  let right: number = 0;
  let n: number = word.length;

  let ans: number = 0;
  while (right < n) {
    if (!isVowelCh(word[right])) {
      left = right + 1;
    } else {
      let cur: string[] = word.substring(left, right + 1).split('');
      while (cur.length > 0) {
        if (isValidArr(cur)) {
          ans++;
        }
        cur.shift();
      }
    }
    right++;
  }
  return ans;
}
