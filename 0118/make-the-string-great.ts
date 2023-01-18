function makeGood(s: string): string {
  let exist: boolean = true;
  do {
    let i = 0;
    for (; i < s.length - 1; i++) {
      const cur = s[i];
      const next = s[i + 1];

      let notGood: boolean =
        (cur.toLowerCase() === next && cur !== next) ||
        (cur.toUpperCase() === next && cur !== next);

      if (notGood) {
        break;
      }
    }

    if (i >= s.length - 1) {
      break;
    } else {
      s = s.substring(0, i) + s.substring(i + 2);
    }
  } while (exist);
  return s;
}

console.log(makeGood('leEeetcode'));
console.log(makeGood('abBAcC'));
console.log(makeGood('s'));
