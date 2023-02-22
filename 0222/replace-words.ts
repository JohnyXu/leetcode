function replaceWords(dictionary: string[], sentence: string): string {
  let groups: string[] = sentence.split(' ');

  let ans: string[] = [];
  for (const w of groups) {
    let find: boolean = false;
    let replace: string = '';
    for (const d of dictionary) {
      if (w.startsWith(d)) {
        if (find) {
          if (d.length < replace.length) {
            replace = d;
          }
        } else {
          replace = d;
        }
        find = true;
      }
    }
    if (find && replace) {
      ans.push(replace);
    } else {
      ans.push(w);
    }
  }
  return ans.join(' ');
}
