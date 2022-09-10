const student = [
  { name: "Anas", grade: 2.93 },
  { name: "Linkon", grade: 2.98 },
  { name: "Zishan", grade: 2.76 },
  { name: "Hasan", grade: 2.85 },
  { name: "Reaz", grade: 3.94 },
  { name: "Zihad", grade: 2.93 },
];
student.sort((a, b) => {
  return b.grade - a.grade;
});
console.log(student);
