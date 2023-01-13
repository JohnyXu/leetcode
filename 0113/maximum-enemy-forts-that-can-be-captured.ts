function captureForts(forts: number[]): number {
  let findIdx: number = -1;
  for (let i = 0; i < forts.length; i++) {
    const cur = forts[i];
    if (cur === -1) {
      findIdx = i;
    }
  }
  if (findIdx < 0) {
    return 0;
  }

  let maximum: number = -1;
  let count: number = 0;

  let previous1: boolean = false;
  let previous0: boolean = false;

  for (let i = 0; i < forts.length; i++) {
    const cur = forts[i];
    if (cur === 1) {
      count = 0;
      previous1 = true;
      previous0 = false;
    }
    if (cur === 0 && previous1) {
      count += 1;
      previous0 = true;
    }
    if (cur === -1 && previous1) {
      if (count > maximum) {
        maximum = count;
      }
      previous1 = false;
      previous0 = false;
      count = 0;
    }
  }

  previous1 = false;
  previous0 = false;
  for (let i = forts.length - 1; i >= 0; i--) {
    const cur = forts[i];
    if (cur === 1) {
      count = 0;
      previous1 = true;
      previous0 = false;
    }
    if (cur === 0 && previous1) {
      count += 1;
      previous0 = true;
    }
    if (cur === -1 && previous1) {
      if (count > maximum) {
        maximum = count;
      }
      previous0 = false;
      previous1 = false;
      count = 0;
    }
  }
  return Math.max(maximum, 0);
}

// console.log(captureForts([1, 0, 0, -1, 0, 0, 0, 0, 1]));
// console.log(captureForts([0, 0, 1, -1]));
console.log(captureForts([-1, -1, 0, 1, 0, 0, 1, -1, 1, 0]));
