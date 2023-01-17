function reformatNumber(number: string): string {
  const s: string = number
    .split('')
    .filter((val) => val !== ' ' && val !== '-')
    .join('');

  let sArr: string[] = [];
  let len: number = s.length;
  if (s.length % 3 === 1) {
    len = s.length - 4;
  } else if (s.length % 3 === 2) {
    len = s.length - 2;
  }

  for (let i = 0; i < len; i += 3) {
    sArr.push(s.substring(i, i + 3));
  }

  if (len < s.length) {
    for (let i = len; i < s.length; i += 2) {
      sArr.push(s.substring(i, i + 2));
    }
  }
  return sArr.join('-');
}

console.log(reformatNumber('1-23-45 6'));
console.log(reformatNumber('123 4-567'));
console.log(reformatNumber('123 4-5678'));
