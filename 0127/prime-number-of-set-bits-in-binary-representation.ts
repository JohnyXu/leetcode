function isPrime(n: number) {
  if (n === 1) {
    return false;
  }
  if (n % 2 === 0 && n !== 2) {
    return false;
  }

  const half = Math.floor(n / 2);
  for (let i = 3; i < half; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function countBit1(n: number) {
  let target: number = n;
  let count = 0;
  while (target !== 0) {
    count += target % 2;
    target = target >> 1;
  }
  return count;
}

function countPrimeSetBits(left: number, right: number): number {
  let count: number = 0;
  for (let i = left; i <= right; i++) {
    let count1: number = countBit1(i);
    if (isPrime(count1)) {
      count++;
    }
  }
  return count;
}
