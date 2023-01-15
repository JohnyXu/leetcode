function sum(str: string): number {
  return str
    .split('')
    .map((val) => parseInt(val))
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);
}

function digitSum(s: string, k: number): string {
  while (s.length > k) {
    let newS: string = '';
    let sum: number = 0;
    for (let i = 0; i < s.length; i += k) {
      sum = 0;
      for (let j = i; j < i + k; j++) {
        if (j < s.length) {
          sum += parseInt(s[j]);
        }
      }
      newS += sum;
    }
    s = newS;
  }
  return s;
}
