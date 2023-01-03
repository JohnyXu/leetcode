function lengthOfLongestSubstring(s: string): number {
  let s1: Set<string> = new Set<string>();
  let back: number = 0;
  let maxCount = 0;
  for (let i = 0; i < s.length; i++) {
    while (s1.has(s[i])) {
      s1.delete(s[back++]);
    }
    s1.add(s[i]);
    maxCount = Math.max(maxCount, i - back + 1);
  }

  return maxCount;
}

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
