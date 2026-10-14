/*// spread operatorlari nima uchun kerak
// malumotlardan nusxa olsih yoki object va massivni birlashtirish uchun kerak

// ishlash tartibi:
// (...)


const oldUser = {
    name: "Lily",
    age: 21,
    status: "online"
}

const updateUser = {
    ...oldUser,  
    status: "offline",
    lastSeen: "12:00"
}

console.log(updateUser);
// console.log(oldUser);



const fruit = ["olma", "banana"]
const veg = ["sabzi", "piyoz"]

const result = [...fruit, ...veg, "non"]
console.log(result);


const product = {
    id: 101,
    name: "Samsung TV",
    price: 100000,
    color: "black"
}

const discountedProduct = {
    ...product,
    price:800,
    isSale: true
}

console.log(discountedProduct);



const currentCard = ["olma", "banana", "cherry"]
const newItem = "mango"
const updateCard = [...currentCard, newItem]

console.log(updateCard);



// for in bizga nima uchun kerak boladi
// Bu operator asosan obyektlarni ichidagi asosan kalit sozlarni aylanib tekshirib chiqishi uchun kerak

const user = {
    name: "Lily",
    age: 21,
    location: "Maydon"
}

for (let save in user ) {
    console.log(`${save}: ${user[save]}`);
}


const formData = {
    name: "Hadicha",
    firstname: "Igamberdiyeva",
    age: 15,
    location: "Maydon", 
    phone: "",
    email: "hadichaIgamberdiyeva002@gmail.com"
}

for (let key in formData) {
    if (formData[key] === "") {
        console.log(`Diqqat: ${key}: "..." maydoni toldirilmagan`)
    }
}


// for .. of  =>  nima uchun kerak?
// Toplam ichidagi qiymatlarni oi bilan togridan togri ishlatish uchun kerak masalan aylanadigon obyektlar bilan yoki (arraylar, stringlar, map, set ) ishlatiladi

const prices = [1500, 2000, 5000]
let total = 0 // 1500, 
for (let narx of prices) {
    console.log("test", narx);
    
    total +=  narx;
}  

console.log("umumiy summa: ", total);  */





// 1-task
let mehmonlar = ["Ali", "Muqimjon", "Eldor"]
for (let mehmon of mehmonlar) {
    console.log(mehmon + " - " + mehmon.length + " ta harf");
}



// 2-task
let konvertlar = [100000, 500000, 200000, 400000];

let jami = 0;

for (let pul of konvertlar) {
    jami = jami + pul;
}

console.log(jami);


// 3-task
let mehmonlar2 = ["Ali", "Muqimjon", "Eldor", "Guli"];

for (let mehmon of mehmonlar2) {
    if (mehmon[0] === "A" || mehmon[0] === "E") {
        console.log("VIP joyga o'ting, " + mehmon);
    }
}



// 4-task
let kelganlar = ["Ali", "Hikmatillo", "Eldor"];
let taqiqlangan = "Hikmatillo";

for (let odam of kelganlar) {
    if (odam === taqiqlangan) {
        console.log(odam + " to'yxonaga kiritilmasin!");
    }
}



// 5-task
let mehmonlar3 = ["Ali", "Guli"];

for (let mehmon of mehmonlar3) {
    console.log(mehmon.split("").reverse().join(""));
}


// 6-task
let menyu = {
    osh: 35000,
    shashlik: 15000,
    somsa: 8000
};

for (let taom in menyu) {
    console.log(taom + " taomi " + menyu[taom] + " so'm");
}



// 7-task
let maulumot = {
    kelin: "Laylo",
    kuyov: "Sardor",
    kelinYosh: 21,
    kuyovYosh: 23
};

for (let malumot in maulumot) {
    if (typeof maulumot[malumot] === "number") {
        console.log(maulumot[malumot]);
    }
}


// 8-task
let mashina = {
    model: "Malibu",
    rangi: "Oq",
    yili: 2025,
    narxi: 30000
};

let soni = 0;

for (let xususiyat in mashina) {
    soni = soni + 1;
}

console.log("Jami xususiyatlar soni: " + soni + " ta");


// 9-task
let xizmatchilar = {
    povor: 500000,
    xizmatchi: 300000,
    sozanda: 700000
};

for (let xizmatchi in xizmatchilar) {
    xizmatchilar[xizmatchi] = xizmatchilar[xizmatchi] + 100000;
}

console.log(xizmatchilar);


// 10-task
let stol = {
    non: true,
    salat: false,
    suv: true,
    meva: false
};

for (let jihoz in stol) {
    if (stol[jihoz] === false) {
        console.log(jihoz + " tugadi, olib keling!");
    }
}