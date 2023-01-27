function isPrime(n: number) {
  if (n === 2) {
    return true;
  }

  if (n % 2 === 0) {
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

function isThree(n: number): boolean {
  if (n === 4) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= 100; i++) {
    if (n === i * i && isPrime(i)) {
      return true;
    }
  }
  return false;
}
