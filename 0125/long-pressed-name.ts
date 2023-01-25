function isLongPressedName(name: string, typed: string): boolean {
  let m: number = name.length;
  let n: number = typed.length;
  let i = 0;
  let j = 0;
  for (; i < m && j < n; ++i, ++j) {
    if (name[i] !== typed[j]) {
      return false;
    }
    let cnt1: number = 0;
    let cnt2: number = 0;
    const c: string = name[i];
    while (i + 1 < m && name[i + 1] === c) {
      ++i;
      ++cnt1;
    }
    while (j + 1 < n && typed[j + 1] === c) {
      ++j;
      ++cnt2;
    }
    if (cnt1 > cnt2) {
      return false;
    }
  }
  return i === m && j === n;
}

console.log(isLongPressedName('alex', 'aaleex'));
console.log(isLongPressedName('a', 'b'));
// console.log(isLongPressedName('saeed', 'ssaaedd'));
