const fs = require('fs');

const fileName = './Camp-data.txt';

function numInRange(target, start, end) {
  return start <= target && target <= end;
}

function rangeInRange(start1, end1, start2, end2) {
  const situation1 = numInRange(start1, start2, end2) && numInRange(end1, start2, end2);
  const situation2 = numInRange(start2, start1, end1) && numInRange(end2, start1, end1);
  return situation1 || situation2;
}

function rangeOverlap(start1, end1, start2, end2) {
  const situation1 = numInRange(start1, start2, end2) || numInRange(end1, start2, end2);
  const situation2 = numInRange(start2, start1, end1) || numInRange(end2, start1, end1);
  return situation1 || situation2;
}

function part1() {
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  let count = 0;
  for (const line of lines) {
    const pairs = line.split(',');
    const group1 = pairs[0].split('-');
    const group2 = pairs[1].split('-');
    if (rangeInRange(+group1[0], +group1[1], +group2[0], +group2[1])) {
      count += 1;
    }
  }
  console.log(count);
  return count;
}

function part2() {
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  let count = 0;
  for (const line of lines) {
    const pairs = line.split(',');
    const group1 = pairs[0].split('-');
    const group2 = pairs[1].split('-');
    if (rangeOverlap(+group1[0], +group1[1], +group2[0], +group2[1])) {
      count += 1;
    }
  }
  console.log(count);
  return count;
}
part1();
part2();
