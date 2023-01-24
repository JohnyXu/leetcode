function countTime(time: string): number {
  const arr: string[] = time.split(':');
  const [h1, h2] = arr[0];
  const [m1, m2] = arr[1];
  let totalH: number = 1;
  let totalM: number = 1;
  if (h1 === '?') {
    if (h2 === '?') {
      totalH = 24;
    } else {
      if (+h2 > 3) {
        totalH = 2;
      } else {
        totalH = 3;
      }
    }
  } else {
    if (h2 === '?') {
      if (+h1 < 2) {
        totalH = 10;
      } else {
        totalH = 4;
      }
    }
  }

  if (m1 === '?') {
    if (m2 === '?') {
      totalM = 60;
    } else {
      totalM = 6;
    }
  } else {
    if (m2 === '?') {
      totalM = 10;
    }
  }
  return totalH * totalM;
}
