function reconstructQueue(people: number[][]): number[][] {
  people.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return b[0] - a[0];
  });

  let ans: number[][] = [];
  for (let i = 0; i < people.length; i++) {
    const p = people[i];
    ans.splice(p[1], 0, p);
  }
  return ans;
}
