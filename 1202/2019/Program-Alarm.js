const fs = require('fs');

// 6327510;
// 4112;
// const fileName = './Program-sample.txt';
const fileName = './Program-data.txt';

function readFile() {
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  return lines;
}

function getDatas() {
  const lines = readFile();
  return lines[0].split(',').map((num) => parseInt(num));
}

function getNextGroup(nums, i) {
  return {
    first: nums[i + 1],
    second: nums[i + 2],
    third: nums[i + 3],
  };
}

function part1() {
  const nums = getDatas();
  nums[1] = 12;
  nums[2] = 2;
  for (let i = 0; i < nums.length; i += 4) {
    const op = nums[i];
    const { first, second, third } = getNextGroup(nums, i);
    if (op === 1) {
      nums[third] = nums[first] + nums[second];
    } else if (op === 2) {
      nums[third] = nums[first] * nums[second];
    } else if (op === 99) {
      break;
    }
  }
  console.log(nums[0]);
}

function part2() {
  let find = false;
  let noun = 0;
  let verb = 0;
  for (let i1 = 0; i1 < 100; i1++) {
    for (let i2 = 0; i2 < 100; i2++) {
      const nums = getDatas();
      nums[1] = i1;
      nums[2] = i2;
      for (let i = 0; i < nums.length; i += 4) {
        const op = nums[i];
        const { first, second, third } = getNextGroup(nums, i);
        if (op === 1) {
          nums[third] = nums[first] + nums[second];
        } else if (op === 2) {
          nums[third] = nums[first] * nums[second];
        } else if (op === 99) {
          break;
        }
        if (nums[third] === 19690720) {
          noun = i1;
          verb = i2;
          find = true;
          break;
        }
      }
      if (find) {
        break;
      }
    }
    if (find) {
      break;
    }
  }
  const total = noun * 100 + verb;
  console.log(total);
}
part1();
part2();
