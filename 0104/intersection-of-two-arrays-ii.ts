function intersect(nums1: number[], nums2: number[]): number[] {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let n1 = 0;
  let n2 = 0;
  let ans: number[] = [];
  while (n1 < nums1.length && n2 < nums2.length) {
    if (nums1[n1] < nums2[n2]) {
      n1++;
    } else if (nums1[n1] > nums2[n2]) {
      n2++;
    }
    if (nums1[n1] === nums2[n2]) {
      ans.push(nums1[n1]);
      n1++;
      n2++;
    }
  }
  return ans;
}

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
