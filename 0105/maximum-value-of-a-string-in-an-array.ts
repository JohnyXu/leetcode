function maximumValue(strs: string[]): number {
  let maximum: number = 0;
  for (let i = 0; i < strs.length; i++) {
    let len: number = 0;
    let onlyDigit: boolean = true;
    for (let m = 0; m < strs[i].length; m++) {
      const ch: string = strs[i][m];
      if (ch.charCodeAt(0) > '9'.charCodeAt(0) || ch.charCodeAt(0) < '0'.charCodeAt(0)) {
        onlyDigit = false;
        break;
      }
    }
    if (onlyDigit) {
      len = parseInt(strs[i]);
    } else {
      len = strs[i].length;
    }
    if (len > maximum) {
      maximum = len;
    }
  }
  return maximum;
}

console.log(maximumValue(['alic3', 'bob', '3', '4', '00000']));
console.log(maximumValue(['1', '01', '001', '0001']));
