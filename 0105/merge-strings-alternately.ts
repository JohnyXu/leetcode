function mergeAlternately(word1: string, word2: string): string {
  let ans: string = '';

  let minLen: number = Math.min(word1.length, word2.length);

  for (let i = 0; i < minLen; i++) {
    ans += word1[i];
    ans += word2[i];
  }
  if (word1.length > word2.length) {
    ans += word1.substring(minLen);
  } else {
    ans += word2.substring(minLen);
  }
  return ans;
}

console.log(mergeAlternately('abc', 'pqr'));
console.log(mergeAlternately('ab', 'pqrs'));
console.log(mergeAlternately('abcd', 'pq'));
