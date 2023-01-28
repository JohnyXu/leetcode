function isPerfectSquare(num: number): boolean {
  let left = 1;
  let right = num;
  while (left < right) {
    let mid: number = (left + right) >> 1;
    if (mid * mid >= num) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left * left === num;
}
