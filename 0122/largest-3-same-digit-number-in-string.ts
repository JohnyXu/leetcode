function largestGoodInteger(num: string): string {
  let first: string = num[0];
  let second: string = num[1];

  let maximum: string = '';
  for (let i = 2; i < num.length; i++) {
    const cur: string = num[i];

    if (cur !== second || cur !== first) {
      first = second;
      second = cur;
      continue;
    }

    let value: string = first + second + cur;
    if (!maximum) {
      maximum = value;
    } else {
      let intValue: number = parseInt(value);
      if (intValue > parseInt(maximum)) {
        maximum = value;
      }
    }
    first = second;
    second = cur;
  }
  return maximum;
}
