const fs = require('fs');

// const fileName = './Amplification-sample.txt';
const fileName = './Amplification-data.txt';

function readFile() {
  const data = fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  const lines = data.split(/\r?\n/);
  return lines;
}
