// REVIEW
function convertToTitle(columnNumber: number): string {
  let mapping = new Map();
  for (let i = 0; i < 26; i++) {
    const key: string = String.fromCharCode('A'.charCodeAt(0) + i);
    mapping.set(i, key);
  }

  let acc: string = '';
  let md: number = 0;
  while (columnNumber !== 0) {
    --columnNumber;
    md = columnNumber % 26;
    acc += mapping.get(md) as string;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return acc.split('').reverse().join('');
}

// function convertToTitle(columnNumber: number): string {
//   let res: string[] = [];
//   while (columnNumber > 0) {
//     --columnNumber;
//     let num: number = columnNumber % 26;
//     res.unshift(String.fromCharCode(num + 65));
//     columnNumber = Math.floor(columnNumber / 26);
//   }
//   return res.join('');
// }
console.log(convertToTitle(701));
