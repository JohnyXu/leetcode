function reverseStr(s: string, k: number): string {
  if (s.length <= k) {
    return s.split('').reverse().join('');
  }

  const arr: string[] = [];
  let acc: string = '';
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    acc += ch;
    if (acc.length === k) {
      arr.push(acc);
      acc = '';
    }
  }
  if (acc.length > 0) {
    arr.push(acc);
  }

  for (let i = 0; i < arr.length; i++) {
    const str1: string = arr[i];
    if (i % 2 === 0) {
      arr[i] = str1.split('').reverse().join('');
    }
  }
  return arr.join('');
}
