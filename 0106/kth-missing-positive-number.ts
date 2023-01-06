function findKthPositive(arr: number[], k: number): number {
  let sets: Set<number> = new Set<number>(arr);
  let ans: number[] = [];
  for (let i = 1; i <= 2000; i++) {
    if (!sets.has(i)) {
      ans.push(i);
    }
  }

  let count = 0;
  for (let i = 0; i < ans.length; i++) {
    const cur = ans[i];
    count += 1;
    if (count === k) {
      return cur;
    }
  }
  return -1;
}

console.log(findKthPositive([2, 3, 4, 7, 11], 5));
console.log(findKthPositive([1, 2, 3, 4], 2));
