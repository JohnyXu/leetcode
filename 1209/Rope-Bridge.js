const fs = require('fs');

// const fileName = './Rope-sample.txt';
const fileName = './Rope-sample2.txt';
// const fileName = './Rope-data.txt';

function readFile() {
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  return lines;
}
function updateTail(htInfo, tails) {
  htInfo.tRow = htInfo.hRow;
  htInfo.tCol = htInfo.hCol;
  const tailkey = `${htInfo.tRow},${htInfo.tCol}`;
  tails[tailkey] = (tails[tailkey] || 0) + 1;
}

function part1() {
  const lines = readFile();
  let heads = {};
  let tails = {};
  const htInfo = {
    hRow: 0,
    hCol: 0,
    tRow: 0,
    tCol: 0,
  };

  heads['0,0'] = 1;
  tails['0,0'] = 1;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const commands = line.split(' ');
    const cmd = commands[0];
    const len = commands[1];
    switch (cmd) {
      case 'U':
        for (let row = 0; row < len; row++) {
          const nextRow = htInfo.hRow + 1;
          const headkey = `${nextRow},${htInfo.hCol}`;
          heads[headkey] = (heads[headkey] || 0) + 1;
          if (Math.abs(nextRow - htInfo.tRow) > 1) {
            updateTail(htInfo, tails);
          }
          htInfo.hRow = nextRow;
        }
        break;
      case 'R':
        for (let col = 0; col < len; col++) {
          const nextCol = htInfo.hCol + 1;
          const headkey = `${htInfo.hRow},${nextCol}`;
          heads[headkey] = (heads[headkey] || 0) + 1;
          if (nextCol - htInfo.tCol > 1) {
            updateTail(htInfo, tails);
          }
          htInfo.hCol = nextCol;
        }
        break;
      case 'D':
        for (let row = 0; row < len; row++) {
          const nextRow = htInfo.hRow - 1;
          const headkey = `${nextRow},${htInfo.hCol}`;
          heads[headkey] = (heads[headkey] || 0) + 1;
          if (Math.abs(nextRow - htInfo.tRow) > 1) {
            updateTail(htInfo, tails);
          }
          htInfo.hRow = nextRow;
        }
        break;
      case 'L':
        for (let col = 0; col < len; col++) {
          const nextCol = htInfo.hCol - 1;
          const headkey = `${htInfo.hRow},${nextCol}`;
          heads[headkey] = (heads[headkey] || 0) + 1;
          if (Math.abs(nextCol - htInfo.tCol) > 1) {
            updateTail(htInfo, tails);
          }
          htInfo.hCol = nextCol;
        }
        break;
      default:
        break;
    }
  }
  console.log(Object.keys(tails).length);
}

part1();

function part2() {
  const lines = readFile();
  let heads = [];
  const total = 10;
  for (let i = 0; i < total; i++) {
    const info = { row: 0, col: 0, points: {} };
    const firstKey = `${info.row},${info.col}`;
    info.points[firstKey] = 1;
    heads.push(info);
  }
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const commands = line.split(' ');
    const cmd = commands[0];
    const len = commands[1];
    switch (cmd) {
      case 'U':
        for (let row = 0; row < len; row++) {
          for (let level = 0; level < total - 1; level++) {
            const cur = heads[level];
            const next = heads[level + 1];

            const nextRow = level === 0 ? cur.row + 1 : cur.row;
            const headkey = `${nextRow},${cur.col}`;
            cur.points[headkey] = (cur.points[headkey] || 0) + 1;
            if (Math.abs(nextRow - next.row) > 1) {
              if (level === 0) {
                next.row = cur.row;
              } else {
                next.row = cur.row - 1;
              }
              const tailkey = `${next.row},${next.col}`;
              next.points[tailkey] = (next.points[tailkey] || 0) + 1;
            }
            cur.row = nextRow;
          }
        }
        break;
      case 'R':
        for (let row = 0; row < len; row++) {
          for (let level = 0; level < total - 1; level++) {
            const cur = heads[level];
            const next = heads[level + 1];

            const nextCol = level === 0 ? cur.col + 1 : cur.col;
            const headkey = `${cur.row},${nextCol}`;
            cur.points[headkey] = (cur.points[headkey] || 0) + 1;
            // console.log(next.col, nextCol, cur.col);
            if (Math.abs(nextCol - next.col) > 1) {
              if (level === 0) {
                next.col = cur.col;
              } else {
                next.col = cur.col - 1;
              }
              const tailkey = `${next.row},${next.col}`;
              next.points[tailkey] = (next.points[tailkey] || 0) + 1;
            }
            cur.col = nextCol;
          }
        }
        break;
      case 'D':
        for (let row = 0; row < len; row++) {
          for (let level = 0; level < total - 1; level++) {
            const cur = heads[level];
            const next = heads[level + 1];

            const nextRow = level === 0 ? cur.row - 1 : cur.row;
            const headkey = `${nextRow},${cur.col}`;
            cur.points[headkey] = (cur.points[headkey] || 0) + 1;
            if (Math.abs(nextRow - next.row) > 1) {
              if (level === 0) {
                next.row = cur.row;
              } else {
                next.row = cur.row + 1;
              }
              const tailkey = `${next.row},${next.col}`;
              next.points[tailkey] = (next.points[tailkey] || 0) + 1;
            }
            cur.row = nextRow;
          }
        }
        break;
      case 'L':
        for (let row = 0; row < len; row++) {
          for (let level = 0; level < total - 1; level++) {
            const cur = heads[level];
            const next = heads[level + 1];

            const nextCol = level === 0 ? cur.col - 1 : cur.col;
            const headkey = `${cur.row},${nextCol}`;
            cur[headkey] = (cur[headkey] || 0) + 1;
            if (Math.abs(nextCol - next.col) > 1) {
              if (level === 0) {
                next.col = cur.col;
              } else {
                next.col = cur.col + 1;
              }
              const tailkey = `${next.row},${next.col}`;
              next.points[tailkey] = (next.points[tailkey] || 0) + 1;
            }
            cur.col = nextCol;
          }
        }
        break;
      default:
        break;
    }
  }
  console.log(Object.keys(heads[heads.length - 1].points).length);
}

part2();
