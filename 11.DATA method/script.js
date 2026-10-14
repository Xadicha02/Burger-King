// date obyekt nima uchun kerak?
// dasturlashda vaqt bilan ishlash kerak bolgan joygaki qollashimiz mumkin boladi
// // new Date => bu butun yildan torib milli secundgacha ichida joylashgan
// oylarni va hafta vkunlarini olayotganda => 0 hisoblab olib beraddi shuning uchun +1 qoshib ketamiz

/*let today = new Date();
console.log("yil: " +  today.getFullYear())

// oyni olish
console.log("oy " + today.getMonth())

// hafta kunini olish
console.log("hafta kuni: " + today.getDay());

// sanani olish 
console.log("sana: " + today.getDate());

// soatni olish
console.log("soat: " + today.getHours());

// minute olish
console.log("minute: " + today.getMinutes());

// secodni olish
console.log("second: " + today.getSeconds());

// milliy second
console.log("milliy second: " + today.getMilliseconds());


let oylar  = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentyabr", "oktabr", "noyabr", "dekabr"]
let haftaKuni = ["yakshanba", "duyshanba", "seyshanba", "chorshanba", "payshanba", "juma", "shanba", ]
console.log(${today.getFullYear()} - yil ${oylar[today.getMonth()]} - ${haftaKuni[today.getDay()]} - ${today.getDate()} - ${today.getHours()} : ${today.getMinutes()} : ${today.getSeconds()});


let haftaKuni = new Date();
let kun = haftaKuni.getDay()

if (kun == 1) {
    console.log("Dushanba");
} else if (kun == 2) {
    console.log("Seshanba");
} else if (kun == 3) {
    console.log("Chorshanba");
} else if (kun == 4) {
    console.log("Payshanba");
} else if (kun == 5) {
    console.log("Juma");
} else if (kun == 6) {
    console.log("Shanba");
} else if (kun == 7) {
    console.log("Yakshanba");
}  


let vaqt = new Date();
let soat = vaqt.getHours();

if (soat >= 6 && soat < 22 ) {
    console.log("Oq rejim");
} else {
    console.log("Qora rejim");
} */



let today = new Date();

console.log("hafta kuni: " + today.getDay());


let now = new Date();

let soat = now.getHours();

let daqiqa = now.getMinutes();

if (soat < 10) {
    soat = "0" + soat;
}

if (daqiqa < 10) {
    daqiqa = "0" + daqiqa;
}

console.log(soat + ":" + daqiqa);



let checkIn = new Date("2026-09-01");
let checkOut = new Date("2026-09-05");

let farq = checkOut - checkIn;

let kun = farq / (1000 * 60 * 60 * 24);

let narx = kun * 50;

console.log("Kun:", kun);

console.log("Umumiy to'lov: $" + narx);


// Yangi yilgacha qolgan vaqt

let hozir = new Date();

let yangiYil = new Date(2027, 0, 1);

let yangiYilFarqi = yangiYil - hozir;

let yangiYilKun = Math.floor(
    yangiYilFarqi / (1000 * 60 * 60 * 24)
);

let yangiYilSoat = Math.floor(
    (yangiYilFarqi / (1000 * 60 * 60)) % 24
);

console.log(
    "Yangi yilgacha " + yangiYilKun + " kun " + yangiYilSoat + " soat qoldi"
);


// Sana haftaning qaysi kuni

let sana = new Date("2000-12-12");

let sanaKuni = sana.getDay();

let hafta = [
    "Yakshanba",
    "Dushanba",
    "Seshanba",
    "Chorshanba",
    "Payshanba",
    "Juma",
    "Shanba"
];

console.log(hafta[sanaKuni]);