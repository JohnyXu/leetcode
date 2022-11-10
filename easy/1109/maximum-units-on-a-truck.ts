function maximumUnits(boxTypes: number[][], truckSize: number): number {
  boxTypes.sort((a, b) => {
    return b[1] - a[1];
  });

  let maxUnits = 0;
  for (let i = 0; i < boxTypes.length; i++) {
    const [size, unit] = boxTypes[i];
    if (size < truckSize) {
      maxUnits = maxUnits + size * unit;
      truckSize -= size;
    } else {
      maxUnits = maxUnits + truckSize * unit;
      truckSize = 0;
      break;
    }
  }
  return maxUnits;
}
