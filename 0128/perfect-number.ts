function getFactors(n: number) {
  let arr: number[] = [1];
  let half = Math.floor(n / 2);
  for (let i = 2; i <= half; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  return arr;
}

function checkPerfectNumber(num: number): boolean {
  if (num === 1) {
    return false;
  }
  let factors: number[] = getFactors(num);
  const sum: number = factors.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return sum === num;
}
