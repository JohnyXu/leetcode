function isCircularSentence(sentence: string): boolean {
  const words: string[] = sentence.split(' ');
  const first: string = words[0];
  const last: string = words[words.length - 1];
  if (first.charAt(0) !== last.charAt(last.length - 1)) {
    return false;
  }
  for (let i = 0; i < words.length - 1; i++) {
    const cur: string = words[i];
    const next: string = words[i + 1];
    if (cur.charAt(cur.length - 1) !== next.charAt(0)) {
      return false;
    }
  }
  return true;
}
