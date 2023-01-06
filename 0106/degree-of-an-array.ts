// REVIEW
interface IDetail {
  len: number;
  min: number;
  max: number;
}

function getMapping(nums: number[]): Map<number, IDetail> {
  let mapping: Map<number, IDetail> = new Map<number, IDetail>();
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];
    mapping.set(cur, {
      len: ((mapping.get(cur) ?? {}).len ?? 0) + 1,
      min: Math.min(i, (mapping.get(cur) ?? {}).min ?? nums.length),
      max: Math.max(i, (mapping.get(cur) ?? {}).max ?? -1),
    });
  }
  return mapping;
}

function findShortestSubArray(nums: number[]): number {
  let degree: number = 0;
  let mapping: Map<number, any> = getMapping(nums);
  for (const key of mapping.keys()) {
    const count: number = mapping.get(key).len;
    if (count > degree) {
      degree = count;
    }
  }

  let minLen: number = nums.length;
  for (const key of mapping.keys()) {
    const count: number = mapping.get(key).len;
    if (count === degree) {
      const diff: number = mapping.get(key).max - mapping.get(key).min + 1;
      if (diff < minLen) {
        minLen = diff;
      }
    }
  }
  return minLen;
}

console.log(findShortestSubArray([1, 2, 2, 3, 1]));
console.log(findShortestSubArray([1, 2, 2, 3, 1, 4, 2]));
