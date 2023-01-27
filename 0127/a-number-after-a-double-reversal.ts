function isSameAfterReversals(num: number): boolean {
  const numStr: string[] = num.toString().split('');
  const reverse: string[] = numStr.reverse();

  let acc: string = '';
  for (let i = 0; i < reverse.length; i++) {
    const ch: string = reverse[i];
    if (acc) {
      acc += ch;
    } else {
      if (ch !== '0') {
        acc += ch;
      }
    }
  }
  return +acc.split('').reverse().join('') === num;
}
