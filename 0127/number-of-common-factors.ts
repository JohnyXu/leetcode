function gcd(a: number, b: number) {
  if (a < b) {
    [a, b] = [b, a];
  }

  if (a % b === 0) {
    return b;
  }
  return gcd(b, a % b);
}

function commonFactors(a: number, b: number): number {
  let num: number = gcd(a, b);

  let count: number = 1;
  for (let i = 2; i <= num; i++) {
    if (a % i === 0 && b % i === 0) {
      count++;
    }
  }
  return count;
}
