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

function getFactors(n: number) {
  let arr: number[] = [1];
  let half: number = Math.floor(n / 2);
  for (let i = 2; i <= half; i++) {
    if (n % i === 0) {
      arr.push(i);
    }
  }
  arr.push(n);
  return arr;
}

function constructRectangle(area: number): number[] {
  if (isPrime(area) || area === 1) {
    return [area, 1];
  }
  const factors: number[] = getFactors(area);
  const half: number = Math.floor(factors.length / 2);
  if (factors.length % 2) {
    return [factors[half], factors[half]];
  }
  return [factors[half], factors[half - 1]];
}
console.log(constructRectangle(122122));
