function minCostToMoveChips(position: number[]): number {
  let odd = position.filter((num) => num % 2 == 1);
  let even = position.filter((num) => num % 2 == 0);
  if (odd.length < even.length) {
    return odd.length;
  }
  return even.length;
}

console.log(minCostToMoveChips([2, 2, 2, 3, 3]));
console.log(minCostToMoveChips([1, 1000000000]));
console.log(minCostToMoveChips([6, 4, 7, 8, 2, 10, 2, 7, 9, 7]));
