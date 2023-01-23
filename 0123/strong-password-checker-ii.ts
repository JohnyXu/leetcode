function strongPasswordCheckerII(password: string): boolean {
  if (password.length < 8) {
    return false;
  }

  let oneLower: boolean = false;
  let oneUpper: boolean = false;
  let oneDigit: boolean = false;
  let oneSpec: boolean = false;
  let existAdjacent: boolean = false;

  let prev: string = password[0];
  for (let i = 0; i < password.length; i++) {
    const ch = password[i];
    const chCode: number = ch.charCodeAt(0);

    if (chCode >= 'A'.charCodeAt(0) && chCode <= 'Z'.charCodeAt(0)) {
      oneUpper = true;
    } else if (chCode >= 'a'.charCodeAt(0) && chCode <= 'z'.charCodeAt(0)) {
      oneLower = true;
    } else if (chCode >= '0'.charCodeAt(0) && chCode <= '9'.charCodeAt(0)) {
      oneDigit = true;
    } else {
      if ('!@#$%^&*()-+'.includes(ch)) {
        oneSpec = true;
      }
    }

    if (i > 0) {
      if (prev === ch) {
        existAdjacent = true;
        break;
      }
      prev = ch;
    }
  }
  if (existAdjacent) {
    return false;
  }
  if (!(oneLower && oneUpper && oneDigit && oneSpec)) {
    return false;
  }
  return true;
}
