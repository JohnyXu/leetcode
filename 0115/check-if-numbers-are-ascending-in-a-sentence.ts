function areNumbersAscending(s: string): boolean {
  const nums: number[] = s
    .split(' ')
    .filter((word: string) => {
      return word[0] >= '0' && word[0] <= '9';
    })
    .map((str) => parseInt(str));

  let prev: number = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];
    if (cur <= prev) {
      return false;
    }
    prev = cur;
  }
  return true;
}
