function shipWithinDays(weights: number[], days: number): number {
  let total: number = weights.reduce((acc, cur) => acc + cur, 0);
  let left = 1;
  let right = total + 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (canCarry(weights, days, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

function canCarry(weights: number[], days: number, carry: number) {
  let useDay = 1;
  let curCarry = 0;
  for (const weight of weights) {
    if (weight > carry) {
      return false;
    }
    if (carry - curCarry >= weight) {
      curCarry += weight;
    } else {
      curCarry = weight;
      useDay++;
    }
  }
  return useDay <= days;
}
