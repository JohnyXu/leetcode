function targetIndices(nums: number[], target: number): number[] {
  nums.sort((a, b) => {
    return a - b;
  });
  let indices: number[] = [];
  nums.forEach((num, index) => {
    if (num == target) {
      indices.push(index);
    }
  });

  return indices;
}
