function convertTemperature(celsius: number): number[] {
  let kelvin: number = +(celsius + 273.15).toFixed(5);
  let fahrenheit: number = +(celsius * 1.8 + 32.0).toFixed(5);
  let ans: number[] = [kelvin, fahrenheit];
  return ans;
}
