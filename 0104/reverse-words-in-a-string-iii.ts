function reverseWords(s: string): string {
  return s
    .split(' ')
    .map((word) => {
      return word.split('').reverse().join('');
    })
    .join(' ');
}

console.log(reverseWords("Let's take LeetCode contest"));
console.log(reverseWords('God Ding'));
