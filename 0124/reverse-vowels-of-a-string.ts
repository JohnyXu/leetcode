function reverseVowels(s: string): string {
  let vowels: string[] = [];
  const sets: Set<string> = new Set<string>(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (sets.has(ch)) {
      vowels.push(ch);
    }
  }
  vowels = vowels.reverse();
  let j: number = 0;
  let ans: string[] = s.split('');
  for (let i = 0; i < ans.length; i++) {
    const ch = s[i];
    if (sets.has(ch)) {
      ans[i] = vowels[j++];
    }
  }
  return ans.join('');
}
