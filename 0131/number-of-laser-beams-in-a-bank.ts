function numberOfBeams(bank: string[]): number {
  let arr: number[] = [];
  for (let i = 0; i < bank.length; i++) {
    const s = bank[i];
    let count: number = 0;
    for (let j = 0; j < s.length; j++) {
      if (s[j] === '1') {
        count += 1;
      }
    }
    if (count > 0) {
      arr.push(count);
    }
  }
  let sum: number = 0;
  let prev: number = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const cur = arr[i];
    sum += cur * prev;
    prev = cur;
  }
  return sum;
}
