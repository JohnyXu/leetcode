function addStrings(num1: string, num2: string): string {
  if (num1.length > num2.length) {
    [num1, num2] = [num2, num1];
  }

  let inc: number = 0;
  let ans: number[] = [];
  for (let i = num2.length - 1; i >= 0; i--) {
    let a1: number = 0;
    let a2: number = +num2[i];
    if (i >= num2.length - num1.length) {
      a1 = +num1[i - (num2.length - num1.length)];
    }
    let sum = a1 + a2 + inc;
    if (sum > 9) {
      inc = 1;
      ans.push(sum % 10);
    } else {
      inc = 0;
      ans.push(sum);
    }
  }
  if (inc > 0) {
    ans.push(inc);
  }
  return ans.reverse().join('');
}
