function getDays(date: string) {
  const months: number[] = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const arr: number[] = date.split('-').map((val) => +val);
  const [month, day] = arr;
  let days: number = day;
  for (let i = 0; i < month; i++) {
    days += months[i];
  }
  return days;
}

function countDaysTogether(
  arriveAlice: string,
  leaveAlice: string,
  arriveBob: string,
  leaveBob: string,
): number {
  const start1: number = getDays(arriveAlice);
  const end1: number = getDays(leaveAlice);
  const start2: number = getDays(arriveBob);
  const end2: number = getDays(leaveBob);
  if (end1 < start2 || end2 < start1) {
    return 0;
  }
  let maxStart: number = Math.max(start1, start2);
  let minEnd: number = Math.min(end1, end2);
  return minEnd - maxStart + 1;
}
