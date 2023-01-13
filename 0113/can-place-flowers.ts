function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count: number = 0;
  let previous1: boolean = false;
  let sum: number = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    const cur = flowerbed[i];
    if (cur === 1) {
      if (previous1) {
        sum += Math.ceil((count - 2) / 2);
      } else {
        previous1 = true;
        sum += Math.floor(count / 2);
      }
      count = 0;
    } else {
      count++;
      if (i === flowerbed.length - 1) {
        sum += previous1 ? Math.floor(count / 2) : Math.ceil(count / 2);
      }
    }
  }
  return sum >= n;
}

// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
// console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));
// console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0], 5));
