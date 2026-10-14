/* Forn ozi  nima uchun kerak?

// for bizga malumotlarni ichini yoki biz buyrgan mantiqlrni ichida qadmma qadam yurib chiqishi uchun kerak

// Forni ishlash sintaksi:
// for(boshlangich_nuqta; shart; doim bir qadmg oshirasiz;) {
//     bajrilish kerak bolgn nuqta mantiqni
// }

// length => uzunlik => avtomat sangich

// for (let i = 1; i <= 5; i++) {
//     console.log(i, "salom f28 gruh");

// }

// console.log(i);

// let name = "xadicha";
// console.log(name.length);

// let mevalar = ["olma", "nok", "shoftoli", "uzum", "gilos"]
// console.log(mevalar.length);

// let oquvchilar = ["Bunyodbek", "MirAziz", "Xadicha", "Mirjamol", "Robiya"]
// for (let name = 0; name < oquvchilar.length; name++) {
//     console.log((name + 1) + "-o'quvchi: " + oquvchilar[name]);

// }

// let yigndi = 0;
// for (let y = 1; y <= 10; y++) {
//     yigndi += y
// }

// console.log(yigndi);

// let cars = {
//     model: "gentra",
//     color: "black",
//     years: 2024
// }

// let sanoqchi = 0;

// for (let kalit in cars) {
//     sanoqchi = sanoqchi + 1;
// }

// console.log("obyekt ichida " + sanoqchi + " ta malumot bor");

let mashina1 = [
    {
        model: "gentra",
        color: "black",
        years: 2026
    },
    {
        model: "matiz",
        color: "white",
        years: 1998
    },
]


//  let mashinalar = [mashina1, mashina2];

// console.log("1-step ", mashinalar);


for (let i = 0; i < 2; i++) {
    console.log("1-step ", i);

    let newMessage = mashina1[i];
    console.log("2-step ", newMessage);


    if (newMessage.years > 2000) {
        console.log(newMessage.years + " Yangi mashina kirshga ruhsat");

    } else {
        console.log(newMessage.years + " Eski mashina kirishga ruhsat etilmadi");

    }
}  */


//let dostlar = ["Ali", "Vali", "Sami", "Guli", "Asil"]




let dostlar = ["Ali", "Vali", "Sami", "Guli", "Asil"];

for (let i = 0; i < dostlar.length; i++) {
    console.log(dostlar[i]);
}




let parol = "12345";

if (parol.length < 8) {
    console.log("Parol juda qisqa!");
} else {
    console.log("Parol xavfsiz!");
}




let mevalar = ["Olma", "Anjir", "Uzum", "Banan", "Shaftoli", "Gilos"];

console.log("Savatda " + mevalar.length + " ta meva bor");





let sonlar = [2, 5, 8, 11, 14, 17, 20];

for (let i = 0; i < sonlar.length; i++) {
    if (sonlar[i] % 2 === 0) {
        console.log(sonlar[i]);
    }
}




let odam1 = { ism: "Otabek", yosh: 25 };
let odam2 = { ism: "Madina", yosh: 15 };
let odam3 = { ism: "Eldor", yosh: 30 };

let odamlar = [odam1, odam2, odam3];

for (let i = 0; i < odamlar.length; i++) {
    if (odamlar[i].yosh > 18) {
        console.log(odamlar[i].ism + " - Sizga kirish mumkin");
    }
}