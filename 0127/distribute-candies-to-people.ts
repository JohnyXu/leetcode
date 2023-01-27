function distributeCandies(candies: number, num_people: number): number[] {
  const ans: number[] = Array.from<number>({ length: num_people }).fill(0);

  let i: number = 1;
  let c: number = 0;
  while (true) {
    if (candies >= i) {
      candies -= i;
      ans[c++] += i;
    } else {
      if (candies > 0) {
        ans[c] += candies;
      }
      break;
    }
    if (c >= num_people) {
      c = c % num_people;
    }
    i++;
  }
  return ans;
}
