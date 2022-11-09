function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
  let res: number[] = [];
  const newNums = nums1.concat(nums2).concat(nums3);

  const nums1Map: { [key: number]: boolean } = {};
  nums1.forEach((num) => {
    nums1Map[num] = true;
  });
  const nums2Map: { [key: number]: boolean } = {};
  nums2.forEach((num) => {
    nums2Map[num] = true;
  });
  const nums3Map: { [key: number]: boolean } = {};
  nums3.forEach((num) => {
    nums3Map[num] = true;
  });
  const uniqueNums = [...new Set(newNums)];
  for (let i = 0; i < uniqueNums.length; i++) {
    const num = uniqueNums[i];
    const passed =
      (nums1Map[num] && nums2Map[num]) ||
      (nums1Map[num] && nums3Map[num]) ||
      (nums2Map[num] && nums3Map[num]);
    if (passed) {
      res.push(num);
    }
  }
  return res;
}

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]));
