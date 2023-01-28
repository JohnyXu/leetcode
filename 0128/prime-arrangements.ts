function isPrime(n: number) {
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  let half = Math.floor(n / 2);
  for (let i = 3; i <= half; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function numPrimeArrangements(n: number): number {
  const primes = new Set();
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      primes.add(i);
    }
  }
  let product: number = 1;
  let totalPrime: number = primes.size;
  let left: number = n - totalPrime;

  for (let i = 1; i <= totalPrime; i++) {
    product *= i;
    product = product % 1000000007;
  }
  for (let i = left; i >= 1; i--) {
    product *= i;
    product = product % 1000000007;
  }
  return product;
}
