function oddString(words: string[]): string {
  const first: string = words[0];
  let difference: number[] = Array.from<number>({ length: first.length - 1 }).fill(0);
  let prev: string = first[0];
  for (let i = 1; i < first.length; i++) {
    const cur = first[i];
    let diff: number = cur.charCodeAt(0) - prev.charCodeAt(0);
    difference[i - 1] = diff;
    prev = cur;
  }

  let difference2: number[] = Array.from<number>({ length: first.length - 1 }).fill(0);
  const second = words[1];
  prev = second[0];
  for (let j = 1; j < second.length; j++) {
    const cur = second[j];
    let diff: number = cur.charCodeAt(0) - prev.charCodeAt(0);
    difference2[j - 1] = diff;
    prev = cur;
  }

  let equal: boolean = true;
  for (let i = 0; i < difference.length; i++) {
    const cur = difference[i];
    if (cur !== difference2[i]) {
      equal = false;
    }
  }

  let difference3: number[] = Array.from<number>({ length: first.length - 1 }).fill(0);
  let target: string = '';
  for (let i = 2; i < words.length; i++) {
    const word = words[i];
    prev = word[0];
    if (equal) {
      for (let j = 1; j < word.length; j++) {
        const cur = word[j];
        let diff: number = cur.charCodeAt(0) - prev.charCodeAt(0);
        if (diff !== difference[j - 1]) {
          target = word;
          break;
        }
        prev = cur;
      }
    } else {
      for (let j = 1; j < word.length; j++) {
        const cur = word[j];
        let diff: number = cur.charCodeAt(0) - prev.charCodeAt(0);
        difference3[j - 1] = diff;
        prev = cur;
      }

      let allEqual: boolean = true;
      for (let i = 0; i < difference3.length; i++) {
        const cur = difference3[i];
        allEqual = allEqual && cur === difference[i];
      }
      if (allEqual) {
        target = second;
      } else {
        target = first;
      }
    }
    if (target) {
      break;
    }
  }
  return target;
}
