function suggestedProducts(products: string[], searchWord: string): string[][] {
  let ans: string[][] = [];

  products.sort((a: string, b: string) => {
    let count: number = Math.max(a.length, b.length);
    for (let i = 0; i < count; i++) {
      if (a[i] && b[i]) {
        if (a[i] !== b[i]) {
          return a[i].charCodeAt(0) - b[i].charCodeAt(0);
        }
      } else if (a[i]) {
        return 1;
      } else if (b[i]) {
        return -1;
      }
    }
    return 0;
  });
  for (let i = 0; i < searchWord.length; i++) {
    const sub: string = searchWord.substring(0, i + 1);
    let arr: string[] = [];
    for (const target of products) {
      if (target.startsWith(sub) && arr.length < 3) {
        arr.push(target);
      }
    }
    ans.push(arr);
  }
  return ans;
}
