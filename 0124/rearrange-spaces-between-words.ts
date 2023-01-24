function reorderSpaces(text: string): string {
  let spaces: string = '';
  let words: string[] = [];

  let acc: string = '';
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === ' ') {
      spaces += ch;
      if (acc.length > 0) {
        words.push(acc);
        acc = '';
      }
    } else {
      acc += ch;
    }
  }
  if (acc.length > 0) {
    words.push(acc);
  }
  if (words.length === 1) {
    return words[0] + spaces;
  }

  let spaceCount: number = Math.floor(spaces.length / (words.length - 1));
  let rightSpace: number = spaces.length % (words.length - 1);
  const joinStr: string = Array.from<string>({ length: spaceCount }).fill(' ').join('');
  const rightStr: string = Array.from<string>({ length: rightSpace }).fill(' ').join('');
  return words.join(joinStr) + rightStr;
}
