function getBottles(total: number, exchange: number) {
  if (total < exchange) {
    return 0;
  }

  const round: number = Math.floor(total / exchange);
  const left: number = round + (total % exchange);
  return round + getBottles(left, exchange);
}

function numWaterBottles(numBottles: number, numExchange: number): number {
  return numBottles + getBottles(numBottles, numExchange);
}
