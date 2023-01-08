function distanceBetweenBusStops(distance: number[], start: number, destination: number): number {
  let dist1: number = 0;
  let dist2: number = 0;
  if (start > destination) {
    [start, destination] = [destination, start];
  }
  for (let i = start; i < destination; i++) {
    dist1 += distance[i];
  }

  for (let i = destination; i < start + distance.length; i++) {
    if (i < distance.length) {
      dist2 += distance[i];
    } else {
      dist2 += distance[i % distance.length];
    }
  }
  return dist1 > dist2 ? dist2 : dist1;
}

console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 1));
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 2));
console.log(distanceBetweenBusStops([1, 2, 3, 4], 0, 3));
