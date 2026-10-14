// While ozi nima uchun kerak?
// While ozi dasturlashda takroriy bajariladigan kod bloklarini yaratish uchun ishlatiladi. Bu operator shart bajarilguncha kodni takrorlaydi, ya'ni shart rost bo'lsa, kod blokini qayta-qayta bajaradi. Bu, masalan, foydalanuvchidan ma'lumot olish, hisoblashlarni amalga oshirish yoki ma'lum bir shart bajarilguncha jarayonni davom ettirish kabi vazifalarda foydalidir.

// While operatorining sintaksisi quyidagicha:

// while (shart) {
//     // bajariladigan kod bloklari
// }

// let battery = 0; // Batareya darajasi 100% dan boshlanadi

// while (battery <= 99) {
//     battery += 1;

//     console.log(telefon quvvatlanmoqda... Hozir: ${battery}% ⚡️);

// }

// console.log("Telefon to'liq quvvatlandi!", battery);



/*let benzin = 30

while (benzin > 0) {
    console.log(Mashin yurmoqda... Qolgan benzin: ${benzin});
    benzin -= 5
}

console.log("Benzin tugadi! Mashina toxtadi🪫");


// oyin 
// score = 0 
// level = 100 
// siz ikkinchi levelga otdingiz!

let correctPassword = "admin123"
let eneterPassword = ""
let = attemps = 0;
let = maxAttemps = 3;

while (eneterPassword !== correctPassword && attemps < maxAttemps) {
    attemps ++;
    eneterPassword = attemps === 3 ? "admin123": "wrong_pass";

    if (eneterPassword === correctPassword) {
        console.log("Tizimga kirdingiz");
        
    } else {
        console.log(No'togri parol! qolgan urinishlar: ${maxAttemps - attemps});
        
    }
}/*let benzin = 30;

while (benzin > 0) {
    console.log(`Mashina harakatlanmoqda... Qolgan benzin: ${benzin}`);
    benzin -= 5;
}

console.log("Mashina to'xtadi");


let level = 1;

while (level < 100) {
    console.log(`Siz ${level}-levelga o'tdingiz!`); 
    level++;
}
*/

/*let = correcPassword = "admon123"
let = enterPassword = ""
let = attempts = 0
let = maxAttempts = 3

while ( enterPassword !== correcPassword && attempts < maxAttempts) {
    attempts ++;
    enterPassword = attempts === 3 ? "admin123"
}  */



// 1-task

let i = 2;

while (i <= 20) {
    console.log(i);
    i += 2;
}


// 2-task

let timer = 5;

while (timer >= 1) {
    console.log("O'yin boshlanishiga " + timer + " soniya qoldi...");
    timer--;
}

console.log("🚀 O'yin boshlandi!");


// 3-task

let num = 234;
let kopaytma = 1;

while (num > 0) {
    let raqam = num % 10;
    kopaytma = kopaytma * raqam;
    num = Math.floor(num / 10);
}

console.log("Raqamlar ko'paytmasi:", kopaytma);


// 4-

let correctPin = 7777;
let attempts = 0;
let pin;

while (attempts < 3) {
    pin = Number(prompt("PIN kodni kiriting:"));

    if (pin === correctPin) {
        console.log("Tizimga hush kelibsiz!");
        break;
    }

    attempts++;
}

if (attempts === 3 && pin !== correctPin) {
    console.log("Karta bloklandi!");
}


// 5-

let trafficMB = 500;
let video = 1;

while (trafficMB >= 40) {
    trafficMB -= 40;

    console.log(
        video + "-video ko'rildi. Qolgan trafik: " + trafficMB + " MB"
    );

    video++;
}

console.log("Jami ko'rilgan videolar:", video - 1);
console.log("Qolgan trafik:", trafficMB + " MB"); 