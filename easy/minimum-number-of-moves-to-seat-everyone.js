/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => {
    return a - b;
  });
  students.sort((a, b) => {
    return a - b;
  });
  const moveSum = seats.reduce((sum, seat, index) => {
    return sum + Math.abs(seat - students[index]);
  }, 0);
  return moveSum;
};

const seats = [3, 20, 17, 2, 12, 15, 17, 4, 15, 20];
const stus = [10, 13, 14, 15, 5, 2, 3, 14, 3, 18];
console.log(minMovesToSeat(seats, stus));
