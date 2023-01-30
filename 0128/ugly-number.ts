function isUgly(n: number): boolean {
  if (n === 1) {
    return true;
  }
  if (n === 0) {
    return false;
  }
  while (n !== 0) {
    if (n % 2 === 0) {
      n /= 2;
    } else if (n % 3 === 0) {
      n /= 3;
    } else if (n % 5 === 0) {
      n /= 5;
    } else {
      if (n === 1) {
        break;
      } else {
        return false;
      }
    }
  }
  return true;
}