function kthDistinct(arr: string[], k: number): string {
  const newArr: string[] = arr.filter((s) => {
    const start = arr.indexOf(s);
    const end = arr.lastIndexOf(s);
    return start === end;
  });
  if (newArr.length < k) {
    return '';
  }
  return newArr[k - 1];
}

console.log(kthDistinct(['d', 'b', 'c', 'b', 'c', 'a'], 2));
