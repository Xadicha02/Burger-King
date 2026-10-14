// foreach(filter) => shunchaki ichma-ich korib chiq va shu mantiq ichida biror bir ishni bajar

// const result = users.filter(user => user.age < 45 && user.location === "Moscow");
// // console.log(user);

// console.log(result);

// // map=> ichma ich har birini ichiga kirib chiqadi
// const result2 = users.map(par => {
//     return par.name.toUpperCase();
// })

// console.log(result2);


// foreach => ichma ich aylan biror bir ishni bjarib ket

/*users.forEach(par1 => {
    console.log(Salom ${par1.name}, sizning balansingiz: ${par1.balance});
    
})
// filter
let workers = [
    {id:1, name: "Hadicha", lavozimi: "Director",      location:"NewYork", salary: 2000},
    {id:2, name: "Reyyano", lavozimi: "Manager",       location:"Moscow",  salary: 1000},
    {id:3, name: "Xanzada", lavozimi: "Administrator", location:"Qairo",   salary: 1000},
    {id:4, name: "Lily",    lavozimi: "Buxgalter",     location:"China",  salary: 1000},
]

const result = workers.filter(worker => worker.lavozimi ==="Director")
console.log(result)

const result2 = workers.map(worker => worker.name.toUpperCase())

console.log(result2 )

console.log(result)  
workers.forEach(worker => {
    worker.location = "Cairo"
})

console.log(workers)  */




let students = [
  { name: "Ali", age: 21, gpa: 4.5, isGrant: true },
  { name: "Vali", age: 19, gpa: 3.8, isGrant: false },
  { name: "Sardor", age: 22, gpa: 4.2, isGrant: true },
  { name: "Lola", age: 20, gpa: 4.7, isGrant: false }
]

// 1-Topshiriq (forEach)
students.forEach(student => {
  console.log(student.name + ": " + student.gpa)
})

// 2-Topshiriq (filter)
let grantStudents = students.filter(student => student.isGrant && student.age > 20)

console.log(grantStudents)

// 3-Topshiriq (map)
let newGpa = students.map(student => student.gpa * 1.1)

console.log(newGpa)