function removeDigit(number: string, digit: string): string {
  let prev: string = number[0];
  let delIdx: number = number.lastIndexOf(digit);
  for (let i = number.length - 2; i >= 0; i--) {
    const cur = number[i];
    if (+prev > +cur && cur === digit) {
      delIdx = i;
    }
    prev = cur;
  }

  return number
    .split('')
    .filter((val, idx) => {
      return idx !== delIdx;
    })
    .join('');
}
