function selfDividingNumbers(left: number, right: number): number[] {
  let ans: number[] = [];
  for (let index = left; index <= right; index++) {
    let target: number = index;
    let digits: number[] = [];
    while (target !== 0) {
      let val: number = target % 10;
      if (val === 0) {
        digits = [];
        break;
      } else {
        digits.push(val);
      }
      target = Math.floor(target / 10);
    }
    if (digits.length > 0) {
      let valid: boolean = true;
      for (let i = 0; i < digits.length; i++) {
        const n = digits[i];
        if (index % n !== 0) {
          valid = false;
          break;
        }
      }
      if (valid) {
        ans.push(index);
      }
    }
  }
  return ans;
}
