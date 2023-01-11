function closetTarget(words: string[], target: string, startIndex: number): number {
  let short: number = words.length;
  let count: number = -1;

  let i: number = startIndex;
  while (true) {
    const cur = words[i];
    count += 1;

    if (cur === target) {
      if (count < short) {
        short = count;
      }
    }
    if (count >= words.length) {
      break;
    }
    i++;
    if (i >= words.length) {
      i = 0;
    }
  }

  i = startIndex;
  count = -1;
  while (true) {
    const cur = words[i];
    count += 1;
    if (cur === target) {
      if (count < short) {
        short = count;
      }
    }
    if (count >= words.length) {
      break;
    }
    i--;
    if (i < 0) {
      i = i + words.length;
    }
  }
  return short === words.length ? -1 : short;
}

console.log(closetTarget(['hello', 'i', 'am', 'leetcode', 'hello'], 'hello', 1));
console.log(closetTarget(['a', 'b', 'leetcode'], 'leetcode', 0));
console.log(closetTarget(['i', 'eat', 'leetcode'], 'ate', 0));
