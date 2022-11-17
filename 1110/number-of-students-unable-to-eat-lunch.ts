function countStudents(students: number[], sandwiches: number[]): number {
  while (true) {
    let [firstSand, ...restSand] = sandwiches;
    const [firstStu, ...restStu] = students;
    if (firstSand === firstStu) {
      sandwiches = restSand;
      students = restStu;
    } else {
      students = [...restStu, firstStu];
      if (!students.includes(firstSand)) {
        break;
      }
    }
    if (students.length <= 0) {
      break;
    }
  }
  return students.length;
}

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1]));
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]));
