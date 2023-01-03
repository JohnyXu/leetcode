function strStr(haystack: string, needle: string): number {
  let foundIdx = -1;
  if (haystack.length === needle.length) {
    return haystack === needle ? 0 : -1;
  }

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    let found = true;
    for (let j = 0; j < needle.length; j++) {
      const n1s = needle[j];
      const h1s = haystack[i + j];
      if (n1s !== h1s) {
        found = false;
        break;
      }
    }
    if (found) {
      foundIdx = i;
      break;
    }
  }
  return foundIdx;
}

console.log(strStr('sadbutsad', 'sad'));
console.log(strStr('leetcode', 'leeto'));
