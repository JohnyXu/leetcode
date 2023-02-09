function minEatingSpeed(piles: number[], h: number): number {
  let sum: number = piles.reduce((acc, cur) => acc + cur, 0);
  let left = 1;
  let right = sum + 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    let s = 0;
    for (const x of piles) {
      s += Math.floor((x + mid - 1) / mid);
    }
    if (s <= h) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

console.log(minEatingSpeed([3, 6, 7, 11], 8));
