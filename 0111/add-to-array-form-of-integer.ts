function addToArrayForm(num: number[], k: number): number[] {
  let inc: number = 0;
  let digit: number = 10;

  let count: number = 0;
  let newK: number = k;
  while (newK) {
    count++;
    newK = Math.floor(newK / 10);
  }

  if (num.length < count) {
    let len: number = num.length;
    for (let i = 0; i < count - len; i++) {
      num.unshift(0);
    }
  }

  for (let i = num.length - 1; i >= 0; i--) {
    const cur: number = k % digit;
    num[i] += inc + cur;
    if (num[i] >= 10) {
      num[i] = num[i] % 10;
      inc = 1;
    } else {
      inc = 0;
    }
    k = Math.floor(k / 10);
  }
  if (inc > 0) {
    num.unshift(inc);
  }
  return num;
}

console.log(addToArrayForm([1, 2, 0, 0], 34));
console.log(addToArrayForm([2, 7, 4], 181));
console.log(addToArrayForm([2, 1, 5], 806));
