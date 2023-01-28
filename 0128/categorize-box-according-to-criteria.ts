function categorizeBox(length: number, width: number, height: number, mass: number): string {
  let volume = length * width * height;
  const enable1: boolean = length >= 10000 || width >= 10000 || height >= 10000;
  const enable2: boolean = volume >= 1000000000;
  const enable3: boolean = mass >= 100;
  if ((enable1 || enable2) && enable3) {
    return 'Both';
  }

  if ((enable1 || enable2) && !enable3) {
    return 'Bulky';
  }
  if (enable3 && !(enable1 || enable2)) {
    return 'Heavy';
  }

  return 'Neither';
}
