function checkZeroOnes(s: string): boolean {
  let maximum1: number = 0;
  let maximum0: number = 0;

  const arr: string[] = s.split('');

  let count1: number = 0;
  let count0: number = 0;
  let prev: string = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    if (cur === prev) {
      if (cur === '1') {
        count1++;
      } else if (cur === '0') {
        count0++;
      }

      if (count1 > maximum1) {
        maximum1 = count1;
      }
      if (count0 > maximum0) {
        maximum0 = count0;
      }
    } else {
      if (cur === '1') {
        count1 = 1;
      } else if (cur === '0') {
        count0 = 1;
      }
    }
    prev = cur;
  }
  if (count1 > maximum1) {
    maximum1 = count1;
  }
  if (count0 > maximum0) {
    maximum0 = count0;
  }
  return maximum1 > maximum0;
}
