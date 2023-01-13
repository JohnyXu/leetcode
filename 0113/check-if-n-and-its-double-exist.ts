function checkIfExist(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    const cur = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const t = arr[j];
      if (cur === 2 * t) {
        return true;
      }
    }
  }

  for (let i = arr.length - 1; i > 0; i--) {
    const cur = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      const t = arr[j];
      if (cur === 2 * t) {
        return true;
      }
    }
  }
  return false;
}

console.log(checkIfExist([10, 2, 5, 3]));
console.log(checkIfExist([3, 1, 7, 11]));
