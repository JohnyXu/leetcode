function divisorSubstrings(num: number, k: number): number {
  let numStr: string = num.toString();
  let count: number = 0;
  for (let i = 0; i <= numStr.length - k; i++) {
    const sub: string = numStr.substring(i, i + k);
    const intSub: number = parseInt(sub);
    if (intSub !== 0) {
      count += num % intSub === 0 ? 1 : 0;
    }
  }
  return count;
}
