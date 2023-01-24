function licenseKeyFormatting(s: string, k: number): string {
  const newS: string = s.split('-').join('').split('').reverse().join('');

  let acc: string = '';
  let arr: string[] = [];
  for (let i = 0; i < newS.length; i++) {
    const ch = newS[i];
    acc += ch;
    if (acc.length === k) {
      arr.push(acc);
      acc = '';
    }
  }
  if (acc.length) {
    arr.push(acc);
  }
  return arr
    .reverse()
    .map((val) => {
      return val.split('').reverse().join('').toUpperCase();
    })
    .join('-');
}
