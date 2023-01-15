function countBinarySubstrings(s: string): number {
  let ans: number[] = [1];

  let prev: string = s[0];
  for (let i = 1; i < s.length; i++) {
    const cur = s[i];
    if (cur === prev) {
      ans[ans.length - 1] += 1;
    } else {
      ans.push(1);
    }
    prev = cur;
  }

  let count: number = 0;
  for (let i = 1; i < ans.length; i++) {
    const cur = ans[i];
    count += Math.min(ans[i - 1], cur);
  }
  return count;
}
// console.log(countBinarySubstrings('00110011'));
// console.log(countBinarySubstrings('10101'));
console.log(countBinarySubstrings('000111000'));
