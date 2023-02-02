function xorQueries(arr: number[], queries: number[][]): number[] {
  let ans: number[] = [];

  for (let i = 0; i < queries.length; i++) {
    const [left, right] = queries[i];
    if (left < right) {
      let acc = arr[left];
      for (let j = left + 1; j <= right; j++) {
        acc = acc ^ arr[j];
      }
      ans.push(acc);
    } else {
      ans.push(arr[left]);
    }
  }
  return ans;
}
