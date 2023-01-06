function findEvenNumbers(digits: number[]): number[] {
  const ans: number[] = [];
  let sets: Set<number> = new Set<number>();
  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < digits.length; j++) {
      for (let k = 0; k < digits.length; k++) {
        if (digits[i] !== 0 && i !== j && j !== k && i !== k) {
          const cur: number = 100 * digits[i] + 10 * digits[j] + digits[k];
          if (cur % 2 === 0) {
            sets.add(cur);
          }
        }
      }
    }
  }
  for (const num of sets.values()) {
    ans.push(num);
  }
  return ans.sort((a, b) => a - b);
}

console.log(findEvenNumbers([2, 1, 3, 0]));
console.log(findEvenNumbers([2, 2, 8, 8, 2]));
console.log(findEvenNumbers([3, 7, 5]));
