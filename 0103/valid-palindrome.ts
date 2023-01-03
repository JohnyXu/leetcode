function isPalindrome(s: string): boolean {
  const lower = s.toLowerCase();
  const arr: string[] = lower.split('').filter((ch) => {
    return (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9');
  });
  return arr.join('') === arr.reverse().join('');
}

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(' '));
