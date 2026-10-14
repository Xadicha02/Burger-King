/*let users = [
    { id: 1, name: 'Hadicha', age: 45, location: "Moscow", balance: 500, isPerimum: true },
    { id: 2, name: 'Miraziz', age: 35, location: "Nepal", balance: 1200, isPerimum: false },
    { id: 3, name: 'Bunyodbek', age: 31, location: "Moscow", balance: 300, isPerimum: false },
    { id: 4, name: 'MirJamol', age: 21, location: "Tokyo", balance: 800, isPerimum: true }
];

const result1 = users.map(user => user.name.toLowerCase())
console.log(result1);


let premiumUsers = users.filter(user => user.isPerimum)

let totalBalance = premiumUsers.reduce((sum, user) => sum + user.balance, 0)
console.log(totalBalance)



const students = [
  { id: 1, name: "Ali", age: 17, course: "Frontend", score: 85, isGraduated: false },
  { id: 2, name: "Vali", age: 22, course: "Backend", score: 92, isGraduated: true },
  { id: 3, name: "Sardor", age: 19, course: "Frontend", score: 65, isGraduated: false },
  { id: 4, name: "Malika", age: 24, course: "Mobile", score: 88, isGraduated: true },
  { id: 5, name: "Nodira", age: 16, course: "Frontend", score: 95, isGraduated: false },
];


let result = students.filter(student => student.isGraduated === false)
// .map(student => student.scrore).reduce((sum, score) => + score, 0)

let result2 = students.map(student => student.course)

console.log(result); */




const students = [
  { id: 1, name: "Ali", age: 17, course: "Frontend", score: 85, isGraduated: false },
  { id: 2, name: "Vali", age: 22, course: "Backend", score: 92, isGraduated: true },
  { id: 3, name: "Sardor", age: 19, course: "Frontend", score: 65, isGraduated: false },
  { id: 4, name: "Malika", age: 24, course: "Mobile", score: 88, isGraduated: true },
  { id: 5, name: "Nodira", age: 16, course: "Frontend", score: 95, isGraduated: false },
];







const orders = [
  { id: 501, item: "Laptop", price: 1200, status: "delivered", isPaid: true },
  { id: 502, item: "Phone", price: 800, status: "pending", isPaid: false },
  { id: 503, item: "Monitor", price: 300, status: "delivered", isPaid: true },
  { id: 504, item: "Keyboard", price: 50, status: "canceled", isPaid: false },
];




// 1-topshiriq
const result = students.filter(student => student.age > 18 && student.course==="Frontend")
console.log(result)


// 2-topshiriq
let result2 = students.map(student => ({
  name: student.name,
  result: student.score > 80 ? "Passed" : "Failed"
}));

console.log(result2);



// 3-topshiriq
let result3 = orders
  .filter(order => order.isPaid === true)
  .reduce((sum, order) => sum + order.price, 0);

console.log(result3);


// 4-topshiriq
let result4 = orders.find(order => order.status === "pending");

console.log(result4.item);



// 5-topshiriq
let task5 = students.findIndex(student => student.score > 90);

console.log(task5);


// 6-VAZIFA
let task6 = students.some(student =>
student.age < 18 && student.isGraduated === false);

console.log(task6);


// 7-VAZIFA
let task7 = orders.every(order => order.price > 30);

console.log(task7);


// 8-VAZIFA
let task8 = orders.map(order => ({
  ...order,
  isPaid: order.status === "delivered" ? true : order.isPaid
}));

console.log(task8);


// 9-VAZIFA
let task9 = students
  .filter(student => student.course === "Frontend")
  .map(student => student.name);

console.log(task9);


// 10-VAZIFA
let unfinishedStudents = students
  .filter(student => student.isGraduated === false)
  .map(student => student.score);

let sum = unfinishedStudents.reduce((total, score) => total + score, 0);

let average = sum / unfinishedStudents.length;

console.log("Yig'indi:", sum);
console.log("O'rtacha:", average);