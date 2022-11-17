function sortByBits(arr: number[]): number[] {
  return arr.sort((a, b) => {
    const binaryA: string = a.toString(2);
    const binaryB: string = b.toString(2);
    const countA = binaryA.split('').reduce((sum, cur) => {
      return sum + (cur === '0' ? 0 : 1);
    }, 0);
    const countB = binaryB.split('').reduce((sum, cur) => {
      return sum + (cur === '0' ? 0 : 1);
    }, 0);
    if (countA != countB) {
      return countA - countB;
    }
    return a - b;
  });
}

console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
console.log(sortByBits([1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1]));
