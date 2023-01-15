function greatestLetter(s: string): string {
  let mapping: Map<string, number> = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    mapping.set(cur, (mapping.get(cur) || 0) + 1);
  }

  let greatest: string = '';

  for (const ch of mapping.keys()) {
    let charCode: number = ch.charCodeAt(0);
    if (charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0)) {
      let lowerCh: string = String.fromCharCode(charCode + 'a'.charCodeAt(0) - 'A'.charCodeAt(0));
      if (mapping.has(lowerCh)) {
        if (!greatest) {
          greatest = ch;
        } else {
          if (ch.charCodeAt(0) > greatest.charCodeAt(0)) {
            greatest = ch;
          }
        }
      }
    }
  }
  return greatest;
}
