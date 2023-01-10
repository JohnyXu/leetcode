function convertEvent(event1: string[]): number[] {
  return event1.map((time: string) => {
    let times: string[] = time.split(':');
    return parseInt(times[0]) * 3600 + parseInt(times[1]) * 60;
  });
}

function haveConflict(event1: string[], event2: string[]): boolean {
  let event1s: number[] = convertEvent(event1);
  let event2s: number[] = convertEvent(event2);

  const [start1, end1] = event1s;
  const [start2, end2] = event2s;

  if ((start1 >= start2 && start1 <= end2) || (end1 >= start2 && end1 <= end2)) {
    return true;
  }
  if ((start2 >= start1 && start2 <= end1) || (end2 >= start1 && end2 <= end1)) {
    return true;
  }
  return false;
}

console.log(haveConflict(['01:15', '02:00'], ['02:00', '03:00']));
console.log(haveConflict(['01:00', '02:00'], ['01:20', '03:00']));
console.log(haveConflict(['10:00', '11:00'], ['14:00', '15:00']));
