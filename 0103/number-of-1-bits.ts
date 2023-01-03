function hammingWeight(n: number): number {
  let s = n.toString(2);
  const arr: number[] = s.split('').map((val) => {
    return parseInt(val);
  });
  return arr.reduce((acc, cur) => {
    return acc + (cur === 1 ? 1 : 0);
  }, 0);
}

console.log(hammingWeight(16));
console.log(hammingWeight(15));
