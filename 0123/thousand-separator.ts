function thousandSeparator(n: number): string {
  let nStr: string = n.toString();

  let ans: string[] = [];
  let count: number = 0;
  for (let i = nStr.length - 1; i >= 0; i--) {
    const ch = nStr[i];
    if (count === 3) {
      ans.push('.');
      count = 0;
    }
    ans.push(ch);
    count += 1;
  }
  return ans.reverse().join('');
}
