// REVIEW
// function maxRepeating(sequence: string, word: string): number {
//   let acc: string = '';
//   let count: number = 0;
//   let prev: number = -1;
//   for (let i = 0; i <= sequence.length - word.length; i++) {
//     if (i < prev) {
//       continue;
//     }
//     let last: number = i + word.length;
//     const ch: string = sequence.substring(i, last);
//     acc += ch;
//     if (acc === word) {
//       console.log(acc, i, last);

//       count += 1;
//       prev = last;
//     } else {
//       prev = i + 1;
//     }
//     acc = '';
//   }
//   return count;
// }

function maxRepeating(sequence: string, word: string): number {
  let n = sequence.length;
  let m = word.length;
  for (let k = Math.floor(n / m); k > 0; k--) {
    if (sequence.includes(word.repeat(k))) {
      return k;
    }
  }
  return 0;
}
console.log(maxRepeating('aaabaaaabaaabaaaabaaaabaaaabaaaaba', 'aaaba'));
