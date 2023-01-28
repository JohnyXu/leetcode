function groupThePeople(groupSizes: number[]): number[][] {
  let ans: number[][] = [];
  const mapping = new Map();
  for (let i = 0; i < groupSizes.length; i++) {
    const num = groupSizes[i];
    if (mapping.has(num)) {
      let arr: number[] = mapping.get(num);
      mapping.set(num, [...arr, i]);
    } else {
      mapping.set(num, [i]);
    }
  }

  for (const key of mapping.keys()) {
    const arr: number[] = mapping.get(key);
    if (arr.length === key) {
      ans.push(arr);
    } else {
      let newArr: number[] = [];

      for (let i = 0; i < arr.length; i++) {
        if (newArr.length === key) {
          ans.push(newArr);
          newArr = [arr[i]];
        } else {
          newArr.push(arr[i]);
        }
      }
      if (newArr.length === key) {
        ans.push(newArr);
      }
    }
  }
  return ans;
}
