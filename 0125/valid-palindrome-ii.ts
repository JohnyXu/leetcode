// REVIEW
function isPalindrome(s: string) {
  if (s[0] !== s[s.length - 1]) {
    return false;
  }

  const half = Math.floor(s.length / 2);
  for (let i = 0; i < half; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function validPalindrome(s: string): boolean {
  for (let i = 0, j = s.length - 1; i < s.length; i++, j--) {
    if (s[i] !== s[j]) {
      let sub = s.substring(i, j);
      let sub2 = s.substring(i + 1, j + 1);
      return isPalindrome(sub) || isPalindrome(sub2);
    }
  }
  return true;
}
