function isPalindromic(s: string): boolean {
  let total = s.length % 2 === 1 ? Math.floor(s.length / 2) : s.length / 2;
  for (let i = 0; i < total; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function longestPalindrome(s: string): string {
  let palindString: string = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const tString: string = s.substring(i, j + 1);
      if (isPalindromic(tString)) {
        palindString = tString.length > palindString.length ? tString : palindString;
      }
    }
  }
  return palindString;
}

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('abb'));
