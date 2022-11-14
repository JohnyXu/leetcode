function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
  // let res = 0;
  // for (const num of arr1) {
  //     if (arr2.every(v => Math.abs(num - v) > d)) {
  //         res++;
  //     }
  // }
  // return res;

  arr2.sort((a, b) => b - a);
  let count: number = 0;
  for (let i = 0; i < arr1.length; i++) {
    const num1 = arr1[i];
    let low = 0;
    let high = arr2.length - 1;
    let mid = Math.floor((low + high) / 2);
    while (Math.abs(num1 - arr2[mid]) > d && mid >= 0) {
      high = mid - 1;
      mid = Math.floor((low + high) / 2);
    }
    if (mid <= low && Math.abs(num1 - arr2[low]) > d) {
      count += 1;
    }
  }
  return count;
}
console.log(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2));
console.log(findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3));
console.log(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6));
console.log(findTheDistanceValue([4, -3, -7, 0, -10], [10], 69));
console.log(findTheDistanceValue([-3, 10, 2, 8, 0, 10], [-9, -1, -4, -9, -8], 9));
