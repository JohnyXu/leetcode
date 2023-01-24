function largestOddNumber(num: string): string {
  let ans: string = '';
  for (let i = num.length - 1; i >= 0; i--) {
    const digitStr: string = num[i];
    const digit: number = parseInt(digitStr);

    if (digit % 2 === 1) {
      ans = digitStr + ans;
    } else if (ans.length > 0) {
      ans = digitStr + ans;
    }
  }

  let startIdx: number = 0;
  for (let i = 0; i < ans.length; i++) {
    const ch = ans[i];
    if (parseInt(ch) > 0) {
      startIdx = i;
      break;
    }
  }
  return ans.substring(startIdx);
}
