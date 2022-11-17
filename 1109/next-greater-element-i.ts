function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  let res: number[] = [];

  const nums2Map: { [key: number]: number } = {};
  nums2.forEach((num, index) => {
    nums2Map[num] = index;
  });

  for (let i = 0; i < nums1.length; i++) {
    const key = nums1[i];
    const index = nums2Map[key];
    let find = false;
    for (let j = index + 1; j < nums2.length; j++) {
      if (nums2[j] > nums1[i]) {
        res.push(nums2[j]);
        find = true;
        break;
      }
    }
    if (!find) {
      res.push(-1);
    }
  }
  return res;
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));
