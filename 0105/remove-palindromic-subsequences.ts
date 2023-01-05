// UNRESOLVED
function isPalindrome(s: string) {
  return s.split('').reverse().join('') === s;
}

function removePalindromeSub(s: string): number {
  if (isPalindrome(s)) {
    return 1;
  }

  let count: number = 0;
  let newS = s.split('').join('');

  while (true) {
    let start: number = -1;
    let end: number = -1;
    let found: boolean = false;

    for (let m = newS.length; m > 0; m--) {
      for (let i = 0; i <= newS.length - m; i++) {
        const sub: string = newS.substring(i, m + i);
        if (isPalindrome(sub)) {
          found = true;
          start = i;
          end = m + i;
          break;
        }
      }
      if (found) {
        break;
      }
    }

    if (start >= 0 && end >= 0) {
      count += 1;
      newS = newS.substring(0, start) + newS.substring(end);
    }
    if (newS.length <= 0) {
      break;
    }
  }
  return count;
}

// console.log('s'.substring(0, 0));
// console.log('s'.substring(1));

console.log(removePalindromeSub('ababa'));
console.log(removePalindromeSub('abb'));
console.log(removePalindromeSub('baabb'));
console.log(removePalindromeSub('bbaabaaa'));
