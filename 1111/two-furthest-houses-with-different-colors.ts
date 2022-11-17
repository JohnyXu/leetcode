function maxDistance(colors: number[]): number {
  let max: number = 0;
  for (let i = 0; i < colors.length - 1; i++) {
    for (let j = i + 1; j < colors.length; j++) {
      if (j - i > max && colors[i] !== colors[j]) {
        max = j - i;
      }
    }
  }
  return max;
}

console.log(maxDistance([1, 1, 1, 6, 1, 1, 1]));
console.log(maxDistance([1, 8, 3, 8, 3]));
console.log(maxDistance([0, 1]));
