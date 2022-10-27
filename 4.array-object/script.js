const users = [
  {
    name: "Dũng",
    age: 22,
    salary: 500,
    hasAJob: true,
  },
  {
    name: "Hoàng",
    age: 25,
    salary: 1000,
    hasAJob: true,
  },
  {
    name: "Lan",
    age: 30,
    hasAJob: false,
  },
];


// 1
users.push({ name: "An", age: 30, salary: 2000, hasAJob: true });
console.log(users);
// 2
users.unshift({ name: "An", age: 30, salary: 2000, hasAJob: true });
console.log(users);
// 3
users.sort((a,b)=> a.age - b.age)
console.log(users)
users.sort((a,b)=> b.age - a.age)
console.log(users)
// 4
const staffs = users.filter(f=> f.hasAJob)
console.log(staffs)
// 5
const newStaffs = [...staffs]
console.log(newStaffs)
// 6
const students = [
    {
        name: "Adam",
        age: 18,
      },
      {
        name: "Eva",
        age: 19,
      },
]
console.log(students)
// 7
const adam = students.find(f=> f.name === "Adam")
adam.university = "CMC"
console.log(adam)
console.log(students)
// 8
const newUsers = [...newStaffs, ...students]
// 9
const k = newUsers.filter(f=> f.salary >0)
console.log(k)
console.log(
  newUsers.map((m) => m?.salary ?? 0).reduce((sum, num) => sum + num, 0)
);
