function shortestToChar(s: string, c: string): number[] {
  // let answer: number[] = Array.from({ length: s.length }, (v, k) => 0);
  // const indices: number[] = s
  //   .split('')
  //   .map((ch, index) => {
  //     return { ch, index };
  //   })
  //   .filter(({ ch, index }) => {
  //     return ch === c;
  //   })
  //   .map(({ index }) => index);

  // for (let i = 0; i < indices[0]; i++) {
  //   answer[i] = indices[0] - i;
  // }
  // for (let i = indices[indices.length - 1]; i < s.length; i++) {
  //   answer[i] = s.length - 1 - i;
  // }

  // let increase: number[][] = [];
  // let decrease: number[][] = [];

  // for (let i = indices.length - 1; i > 0; i--) {
  //   const sum: number = indices[i] + indices[i - 1];
  //   const diff: number = indices[i] - indices[i - 1];
  //   if (diff > 3) {
  //     if (sum % 2 == 0) {
  //       let pair1: number[] = [indices[i - 1], sum / 2];
  //       let pair2: number[] = [sum / 2, indices[i]];
  //       increase.push(pair1);
  //       decrease.push(pair2);
  //     } else {
  //       let pair1: number[] = [indices[i - 1], Math.floor(sum / 2)];
  //       let pair2: number[] = [Math.floor(sum / 2), indices[i]];
  //       increase.push(pair1);
  //       decrease.push(pair2);
  //     }
  //   } else {
  //     answer[indices[i] - 1] = 1;
  //     answer[indices[i] - 2] = 1;
  //   }
  // }

  // for (const pair of increase) {
  //   for (let i = pair[0]; i <= pair[1]; i++) {
  //     answer[i] = i - pair[0];
  //     console.log(answer[i], i);
  //   }
  // }

  // for (const pair of decrease) {
  //   for (let i = pair[1]; i >= pair[0]; i--) {
  //     answer[i] = pair[1] - i;
  //   }
  // }
  // return answer;
  const result = new Array(s.length).fill(Infinity);
  let prev = Infinity;
  const handleIndex = (i: number) => {
    if (s[i] === c) {
      prev = i;
    }
    result[i] = Math.min(result[i], Math.abs(i - prev));
  };
  for (let i = 0; i < s.length; i++) {
    handleIndex(i);
  }
  prev = Infinity;
  for (let i = s.length - 1; i >= 0; i--) {
    handleIndex(i);
  }
  return result;
}
console.log(shortestToChar('loveleetcode', 'e'));
// console.log(shortestToChar('aaab', 'b'));
