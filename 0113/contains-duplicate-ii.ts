function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const mapping: Map<number, number> = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const cur: number = nums[i];
    if (!mapping.has(cur)) {
      mapping.set(cur, i);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    if (mapping.has(cur)) {
      const idx: number = mapping.get(cur) as number;
      if (idx !== i) {
        if (Math.abs(i - idx) <= k) {
          return true;
        } else {
          mapping.set(cur, i);
        }
      }
    }
  }
  return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1));
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
