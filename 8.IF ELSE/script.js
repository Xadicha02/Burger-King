// if else nima uchun kerak?

// if else => Bizga biror bir shartni tekshirib yoki bajarib berish uchun kerak boladi

// if shart (beriladigon joy) {
//     xabar chiqadigon joy => true
// } else {
//     xato natijani koradigon joy => false
// }

// let age = 18;

// if(age >= 18) {
//     alert("krishga ruhsat")
// }else {
//     alert("uzur yoshingiz yetmadi")
// }

/*let ball = 30;

if (ball >= 90) {
    console.log("A'lo");
} else if(ball >= 70) {
    console.log("yaxshi");
} else if(ball >= 50) {
    console.log("qoniqarli");
} else {
    console.log("yiqildi");
}

let userName = "admin";
let passWord = "12345"

if (userName === "admin" && passWord === "12345") {
    console.log(5+5+8+9);
} else {
    console.log("Login yoki parol xato");
}

let price = 200;
let discount = false;

if (discount) {
    console.log("qolgan summa: ", price - 20, "000 ming");
}  else {
    console.log("umimiy summa", price);  
}

// ball = 100-80=A 80-60=B, 40-60C, 0-40=F error
let baho = 49;

if (baho <= 100 && baho > 80) {
    console.log("Budjet")
}else if(baho <= 80 && baho > 60) {
    console.log("Kontrackt");
} else if(baho <= 60 && baho> 40) {
    console.log("super kontrackt")
} else if(baho <= 40 && baho > 0) {
    console.log("yiqildi");
} else {
    console.log("Xatolik yuzga keldi");
}

// Ikkita son berilgan. Kattasini aniqlang.

// Ikkita son berilgan. Kichigini aniqlang.

// Son juftmi yoki toqmi? */


// 1. 
let birinchiSon = 15;
let ikkinchiSon = 20;

if (birinchiSon > ikkinchiSon) {
    console.log(birinchiSon);
} else {
    console.log(ikkinchiSon);
}


// 2.
let son1 = 11;
let son2 = 111;

if (son1 < son2) {
    console.log(son1);
} else {
    console.log(son2);
}


// 3. 
let son = 10;

if (son % 2 == 0) {
    console.log("Juft son");
} else {
    console.log("Toq son");
}


// 4. 
let raqam = 10;

if (raqam > 0) {
    console.log("Musbat");
} else {
    console.log("Manfiy");
}


// 5. 
let birinchi = 10;
let ikkinchi = 20;
let uchinchi = 35;

if (uchinchi > birinchi + ikkinchi) {
    console.log("Uchinchi son birinchi ikkita son yig'indisidan katta");
} else {
    console.log("Uchinchi son birinchi ikkita son yig'indisidan katta emas");
}


// 6. 
let sonA = 10;
let sonB = 10;

if (sonA == sonB) {
    console.log("Teng");
} else {
    console.log("Teng emas");
}


// 7. 
let raqam100 = 120;

if (raqam100 > 100) {
    console.log("100 dan katta");
} else {
    console.log("100 dan kichik yoki teng");
}


// 8. 
let yosh = 20;

if (yosh >= 18) {
    console.log("Ruxsat");
} else {
    console.log("Ruxsat berilmaydi");
}


// 9. 
let nol = 0;

if (nol == 0) {
    console.log("0 ga teng");
} else {
    console.log("0 ga teng emas");
}


// 10.
let sonOraliq = 25;

if (sonOraliq > 10 && sonOraliq < 50) {
    console.log("Shartga mos");
} else {
    console.log("Shartga mos emas");
}


// 11. 
let oraliqSon = 50;

if (oraliqSon >= 1 && oraliqSon <= 100) {
    console.log("1 va 100 oralig‘ida");
} else {
    console.log("Oraliqda emas");
}


// 12.
let karraliSon = 20;

if (karraliSon % 5 == 0 || karraliSon % 10 == 0) {
    console.log("Karrali");
} else {
    console.log("Karrali emas");
}


// 13. 
let kattaSon = 20;
let kichikSon = 20;

if (kattaSon > kichikSon) {
    console.log("Birinchi son katta");
} else if (kattaSon < kichikSon) {
    console.log("Ikkinchi son katta");
} else {
    console.log("Ikkalasi teng");
}


// 14. 
let foydalanuvchi = "Admin";

if (foydalanuvchi == "Admin") {
    console.log("Xush kelibsiz");
} else {
    console.log("Salom foydalanuvchi");
}


// 15. 
let tekshirilayotganSon = 8;

if (tekshirilayotganSon > 0 && tekshirilayotganSon % 2 == 0) {
    console.log("OK");
} else {
    console.log("ERROR");
}


// 16. 
let birinchiRaqam = 5;
let ikkinchiRaqam = 7;

if ((birinchiRaqam + ikkinchiRaqam) % 2 == 0) {
    console.log("Juft");
} else {
    console.log("Toq");
}


// 17. 
let sonBir = 25;
let sonIkki = 10;

if (sonBir - sonIkki > 10) {
    console.log("10 dan katta");
} else {
    console.log("10 dan katta emas");
}


// 18. Sonlardan biri musbat va juftmi
let birinchiRaqam2 = 5;
let ikkinchiRaqam2 = 8;

if (birinchiRaqam2 > 0 && birinchiRaqam2 % 2 == 0) {
    console.log("Birinchi son musbat va juft");
} else if (ikkinchiRaqam2 > 0 && ikkinchiRaqam2 % 2 == 0) {
    console.log("Ikkinchi son musbat va juft");
} else {
    console.log("Musbat va juft son yo‘q");
}


// 19. Son 3 yoki 5 ga bo‘linadimi
let bolinuvchiSon = 15;

if (bolinuvchiSon % 3 == 0 || bolinuvchiSon % 5 == 0) {
    console.log("Mos");
} else {
    console.log("Mos emas");
}


// 20. Son musbat va juft yoki 3 ga bo‘linadimi
let tekshiruvSon = 12;

if (tekshiruvSon > 0 && (tekshiruvSon % 2 == 0 || tekshiruvSon % 3 == 0)) {
    console.log("Mos");
} else {
    console.log("Mos emas");
}


// 21. Sonni 7 ga bo‘lgandagi qoldiq
let qoldiqSon = 15;

if (qoldiqSon % 7 == 1) {
    console.log("X");
} else if (qoldiqSon % 7 == 2) {
    console.log("Y");
} else {
    console.log("Z");
}


// 24. 3 ta son ichida musbat son bor yoki yo‘q
let birinchiSon24 = -5;
let ikkinchiSon24 = -2;
let uchinchiSon24 = 10;

if (birinchiSon24 > 0 || ikkinchiSon24 > 0 || uchinchiSon24 > 0) {
    console.log("Musbat son bor");
} else {
    console.log("Musbat topilmadi");
}


// 25. Juft va 3 ga bo‘linmaydigan son
let tekshiruvSon25 = 8;

if (tekshiruvSon25 % 2 == 0 && tekshiruvSon25 % 3 != 0) {
    console.log("OK");
} else {
    console.log("ERROR");
}


// 26. User va password
let foydalanuvchi26 = "admin";
let parol26 = 1234;

if (foydalanuvchi26 == "admin" && parol26 == 1234) {
    console.log("OK");
} else {
    console.log("Noto‘g‘ri foydalanuvchi");
}


// 27. Hafta kunini aniqlash
let haftaKuni = 6;

if (haftaKuni == 1) {
    console.log("Dushanba");
} else if (haftaKuni == 2) {
    console.log("Seshanba");
} else if (haftaKuni == 3) {
    console.log("Chorshanba");
} else if (haftaKuni == 4) {
    console.log("Payshanba");
} else if (haftaKuni == 5) {
    console.log("Juma");
} else if (haftaKuni == 6) {
    console.log("Shanba");
} else if (haftaKuni == 7) {
    console.log("Yakshanba");
} else {
    console.log("Bunday kun yo‘q");
}


// 28. Oyni aniqlash
let oyRaqami = 6;

if (oyRaqami == 1) {
    console.log("Yanvar");
} else if (oyRaqami == 2) {
    console.log("Fevral");
} else if (oyRaqami == 3) {
    console.log("Mart");
} else if (oyRaqami == 4) {
    console.log("Aprel");
} else if (oyRaqami == 5) {
    console.log("May");
} else if (oyRaqami == 6) {
    console.log("Iyun");
} else if (oyRaqami == 7) {
    console.log("Iyul");
} else if (oyRaqami == 8) {
    console.log("Avgust");
} else if (oyRaqami == 9) {
    console.log("Sentabr");
} else if (oyRaqami == 10) {
    console.log("Oktabr");
} else if (oyRaqami == 11) {
    console.log("Noyabr");
} else if (oyRaqami == 12) {
    console.log("Dekabr");
} else {
    console.log("Bunday oy yo‘q");
}


// 29. Faslni aniqlash
let oy = 6;

if (oy == 12 || oy == 1 || oy == 2) {
    console.log("Qish");
} else if (oy == 3 || oy == 4 || oy == 5) {
    console.log("Bahor");
} else if (oy == 6 || oy == 7 || oy == 8) {
    console.log("Yoz");
} else if (oy == 9 || oy == 10 || oy == 11) {
    console.log("Kuz");
} else {
    console.log("Bunday oy yo‘q");
}