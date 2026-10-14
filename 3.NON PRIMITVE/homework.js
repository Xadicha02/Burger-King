const fruits = ["orange", "pineapple", "strawberry", "apple"]

console.log("First:", fruits[0]);
console.log("Last:", fruits[3]);



const narxlar = ["10", "100", "1000", "10000", "100000"]

let yigindi = narxlar [1] + [3];
console.log("Yig'indi:", yigindi);




const shaharlar = ["Toshkent", "Samarqand", "Buxoro",]
shaharlar[1] = "Andijon"
console.log(shaharlar);


const car = {
    brand: "Porsche",
    model: 911,
    year: 2020,
    color: "red"
}

console.log("brendi:", car.brend);
console.log("yili:", car.year);


const book = {
    title: "Harry Potter",
    author: "J. K. Rowling",
}

book.price = 100;
book.title = "Atomic Habits";

console.log(book);  

const student = {
    name:"Lily",
    age: 15,
    grades: [5, 4, 5, 5]
}

console.log(student.name);
console.log(student.grades[1]);


function salomlash(ism) {
    console.log("Salom, " + ism + "! Xush kelibsiz!");
}

salomlash("Lily");


function kopaytir(a, b) {
    return a * b;
}

let natija = kopaytir(5, 6);

console.log(natija);

const user = {
    name: "Lily ",
    age: 20
};

function yoshTekshir(obj) {
    if (obj.age >= 18) {
        return "Katta yoshli";
    } else {
        return "Yosh bola";
    }
}

console.log(yoshTekshir(user));


const toplam = [
    {
        name: "Ali",
        score: 80
    },
    {
        name: "Vali",
        score: 90
    }
];

function jamiBal(arr) {
    return arr[0].score + arr[1].score;
}

console.log(jamiBal(toplam));

