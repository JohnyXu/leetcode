function getDigits(n: number) {
  let sets = new Set();
  while (n !== 0) {
    sets.add(n % 10);
    n = Math.floor(n / 10);
  }
  return sets;
}

function getNoZeroIntegers(n: number): number[] {
  let ans: number[] = [];
  for (let i = 1; i < n; i++) {
    let set1 = getDigits(i);
    if (!set1.has(0)) {
      const left = n - i;
      const set2 = getDigits(left);
      if (!set2.has(0)) {
        ans.push(i);
        ans.push(left);
        break;
      }
    }
  }
  return ans;
}
