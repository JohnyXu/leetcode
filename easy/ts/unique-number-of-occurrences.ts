function uniqueOccurrences(arr: number[]): boolean {
  const countMap: { [key: number]: number } = {};
  arr.forEach((num) => {
    countMap[num] = (countMap[num] || 0) + 1;
  });
  const counts: number[] = Object.values(countMap);
  for (let i = 0; i < counts.length; i++) {
    const num = counts[i];
    const start = counts.indexOf(num);
    const end = counts.lastIndexOf(num);
    if (start != end) {
      return false;
    }
  }
  return true;
}

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueOccurrences([1, 2]));
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
