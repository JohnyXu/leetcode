function minOperations(boxes: string): number[] {
  let ans: number[] = [];
  const arr: number[] = boxes.split('').map((val) => +val);
  for (let i = 0; i < arr.length; i++) {
    let count: number = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (arr[j] === 1) {
          count += Math.abs(j - i);
        }
      }
    }
    ans.push(count);
  }
  return ans;
}
