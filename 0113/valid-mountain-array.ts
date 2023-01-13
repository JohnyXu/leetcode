function validMountainArray(arr: number[]): boolean {
  if (arr.length < 3) {
    return false;
  }
  if (arr.length === 3) {
    return arr[0] < arr[1] && arr[1] > arr[2];
  }

  let diff: number = arr[1] - arr[0];
  if (diff < 0) {
    return false;
  }

  let count: number = 0;
  let countUp: number = 0;
  let assign: number = -1;
  let prev: number = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let tDiff = arr[i] - prev;
    if (tDiff === 0) {
      return false;
    }
    if (tDiff * assign < 0 && count < 1) {
      countUp += 1;
    }
    if (tDiff * assign > 0) {
      assign = 1;
      count += 1;
    }

    prev = arr[i];
  }
  return count === 1 && countUp >= 1;
}

console.log(validMountainArray([2, 1]));
console.log(validMountainArray([3, 5, 5]));
console.log(validMountainArray([0, 3, 2, 1]));
console.log(validMountainArray([4, 4, 3, 2, 1]));
