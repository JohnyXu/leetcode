function convertTime(current: string, correct: string): number {
  let curArr: number[] = current.split(':').map((val) => parseInt(val));
  let corrArr: number[] = correct.split(':').map((val) => parseInt(val));

  if (curArr[0] > corrArr[0]) {
    corrArr[0] += 24;
  }

  if (curArr[1] > corrArr[1]) {
    corrArr[0] -= 1;
    corrArr[1] += 60;
  }

  let hour: number = corrArr[0] - curArr[0];
  let count: number = hour;

  let minitue: number = corrArr[1] - curArr[1];
  if (minitue >= 15) {
    count = count + Math.floor(minitue / 15);
    minitue = minitue % 15;
  }
  if (minitue >= 5) {
    count = count + Math.floor(minitue / 5);
    minitue = minitue % 5;
  }
  return count + minitue;
}
