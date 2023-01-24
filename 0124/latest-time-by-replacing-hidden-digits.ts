function maximumTime(time: string): string {
  const arr: string[] = time.split(':');
  const [h1, h2] = arr[0];
  const [m1, m2] = arr[1];

  let totalH: string = '';
  let totalM: string = '';
  if (h1 === '?') {
    if (h2 === '?') {
      totalH = '23';
    } else {
      if (+h2 > 3) {
        totalH = '1' + h2;
      } else {
        totalH = '2' + h2;
      }
    }
  } else {
    if (h2 === '?') {
      if (+h1 > 1) {
        totalH = h1 + '3';
      } else {
        totalH = h1 + '9';
      }
    } else {
      totalH = h1 + h2;
    }
  }

  if (m1 === '?') {
    if (m2 === '?') {
      totalM = '59';
    } else {
      totalM = '5' + m2;
    }
  } else {
    if (m2 === '?') {
      totalM = m1 + '9';
    } else {
      totalM = m1 + m2;
    }
  }
  return totalH + ':' + totalM;
}
