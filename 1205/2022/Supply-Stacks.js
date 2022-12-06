const fs = require('fs');

const fileName = './Supply-data.txt';

function parseCommand(line) {
  const list1 = line.split('from');
  const count = +list1[0].substring(4).trim();
  const from = +list1[1].split('to')[0].trim();
  const to = +list1[1].split('to')[1].trim();
  return { count, from, to };
}

function part1() {
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  let stackMap = {};
  const commands = [];
  let isCommand = false;
  for (const line of lines) {
    if (!isCommand) {
      const arr = line.split(' ');
      let count = 0;
      let backspaceCount = 0;
      let chCount = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].startsWith('[')) {
          chCount += 1;
          count = backspaceCount / 4 + chCount;
          if (!stackMap[count]) {
            stackMap[count] = [];
          }
          stackMap[count].push(arr[i]);
        } else {
          backspaceCount += 1;
        }
      }
    } else {
      commands.push(line);
    }
    if (!line.trim()) {
      isCommand = true;
    }
  }
  for (const [key, list] of Object.entries(stackMap)) {
    stackMap[key] = list.reverse();
  }
  for (const line of commands) {
    const cmd = parseCommand(line);
    const { count, from, to } = cmd;
    for (let i = 0; i < count; i++) {
      const ch = stackMap[from].pop();
      stackMap[to].push(ch);
    }
  }

  const result = Object.entries(stackMap)
    .map((item) => {
      return item[1][item[1].length - 1].substring(1, 2);
    })
    .join('');
  console.log(result);
}

function part2() {
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  let stackMap = {};
  const commands = [];
  let isCommand = false;
  for (const line of lines) {
    if (!isCommand) {
      const arr = line.split(' ');
      let count = 0;
      let backspaceCount = 0;
      let chCount = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].startsWith('[')) {
          chCount += 1;
          count = backspaceCount / 4 + chCount;
          if (!stackMap[count]) {
            stackMap[count] = [];
          }
          stackMap[count].push(arr[i]);
        } else {
          backspaceCount += 1;
        }
      }
    } else {
      commands.push(line);
    }
    if (!line.trim()) {
      isCommand = true;
    }
  }
  for (const [key, list] of Object.entries(stackMap)) {
    stackMap[key] = list.reverse();
  }
  for (const line of commands) {
    const cmd = parseCommand(line);
    const { count, from, to } = cmd;
    let tempList = [];
    for (let i = 0; i < count; i++) {
      const ch = stackMap[from].pop();
      tempList.push(ch);
    }
    const reverseList = tempList.reverse();
    for (const ch of reverseList) {
      stackMap[to].push(ch);
    }
  }

  const result = Object.entries(stackMap)
    .map((item) => {
      return item[1][item[1].length - 1].substring(1, 2);
    })
    .join('');
  console.log(result);
}

part1();
part2();
