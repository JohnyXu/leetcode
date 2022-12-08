const fs = require('fs');

// const fileName = './NoSpace-sample.txt';
const fileName = './NoSpace-data.txt';

function readFile() {
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  return lines;
}

function parseDirectories(lines, index, current) {
  let line = lines[index];
  if (!line) {
    return;
  }
  const params = line.split(' ');
  if (params[0] === '$') {
    const cmd = params[1];
    if (cmd === 'cd') {
      const dir = params[2];
      if (dir === '/') {
        current._parent = null;
        current._key = 'root';
        parseDirectories(lines, index + 1, current);
      } else if (dir === '..') {
        parseDirectories(lines, index + 1, current._parent);
      } else {
        current[dir] = {};
        current[dir]._parent = current;
        current[dir]._key = dir;
        parseDirectories(lines, index + 1, current[dir]);
      }
    } else if (cmd === 'ls') {
      parseDirectories(lines, index + 1, current);
    }
  } else {
    if (line.startsWith('dir')) {
      parseDirectories(lines, index + 1, current);
    } else {
      const [value, key] = params;
      current[key] = value;
      parseDirectories(lines, index + 1, current);
    }
  }
}

function calculateDirSizes(current, parentKey, sizes) {
  const curKey = parentKey ? parentKey + '_' + current._key : current._key;
  for (const [key, file] of Object.entries(current)) {
    if (typeof file === 'string') {
      sizes[curKey] = (sizes[curKey] || 0) + +file;
    } else if (file && file._parent && key !== '_parent') {
      sizes[curKey] = (sizes[curKey] || 0) + calculateDirSizes(file, curKey, sizes);
    }
  }
  return sizes[curKey];
}

function part1() {
  const lines = readFile();
  let root = {};
  parseDirectories(lines, 0, root);
  let sizes = {};
  let maxSize = 100000;
  calculateDirSizes(root, '', sizes);
  let sum = Object.entries(sizes)
    .filter(([key, size]) => {
      return size <= maxSize;
    })
    .reduce((total, pair) => {
      return total + pair[1];
    }, 0);
  console.log(sum);
}

part1();

function part2() {
  const lines = readFile();
  let root = {};
  let sizes = {};
  parseDirectories(lines, 0, root);
  calculateDirSizes(root, '', sizes);

  const { root: total, ...rest } = sizes;
  const sortSizes = Object.values(rest).map((value) => value);
  sortSizes.sort((a, b) => {
    return a - b;
  });

  let smallestSize = 0;
  for (let i = 0; i < sortSizes.length; i++) {
    const s = sortSizes[i];
    if (total - s <= 40000000) {
      smallestSize = s;
      break;
    }
  }
  console.log(smallestSize);
}

part2();
