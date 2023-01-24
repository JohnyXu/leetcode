function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) {
    return '';
  }
  let len: number = gcd(str1.length, str2.length);
  return str1.substring(0, len);
}

function gcd(a: number, b: number) {
  return b === 0 ? a : gcd(b, a % b);
}
