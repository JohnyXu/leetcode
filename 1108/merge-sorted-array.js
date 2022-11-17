/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const filterNums1 = nums1.filter((num, index) => index < m);
  const filterNums2 = nums2.filter((num, index) => index < n);

  const newNums = [];
  let i = 0;
  let j = 0;

  for (let index = 0; index < filterNums1.length + filterNums2.length; index++) {
    if (i < m && j < n) {
      if (filterNums1[i] < filterNums2[j]) {
        nums1[index] = filterNums1[i];
        i++;
      } else if (filterNums1[i] > filterNums2[j]) {
        nums1[index] = filterNums2[j];
        j++;
      } else if (filterNums1[i] == filterNums2[j]) {
        nums1[index] = filterNums1[i];
        i++;
        index++;
        nums1[index] = filterNums2[j];
        j++;
      }
    } else if (i < m) {
      nums1[index] = filterNums1[i];
      i++;
    } else if (j < n) {
      nums1[index] = filterNums2[j];
      j++;
    }
  }
  return nums1;
};
