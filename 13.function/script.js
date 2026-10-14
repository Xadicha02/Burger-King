/*// function ozi nima uchun kerak?
// Function bu bizga biror bir mantigimizni avtomat shaklida doim ishlatib beradi yoki ishga tushirib beradi

// yozilish tartibi
// eski sintakis

// function funskiyaNomi(paremtr1 yoki paremtr2) { paramter/ defind
//     // bajariladiogon mantriqlariz
//     return natijani bervoramiz
// }

// funskiyaNomi(mahsulotlarni berihs joyi un1, sut2) call /argument

// array function
// yozlish sintaksi:

// const funksiyNomi = (parametr1, parametr2) => {
//     //     // bajariladiogon mantriqlariz
//     return natijani bervoramiz
// }

// funskiyaNomi(mahsulotlarni berihs joyi un1, sut2) call /argument

const salomBer = () => {
    console.log("Assalomu aleykum, Js darsiga xush kelibsiz!");
}

salomBer()

// kvadart topish

const kvadratTopish = (kv, sm) => {
    return kv ** sm;
}
let result = kvadratTopish(5, 3)
console.log(result);

// object bilan ishlash
const user = {
    name: "Hadicha",
    age: 16
}

const profilMalumot = (shaxs) => {
    return "Frontend - 28 gruhs azosi : " + shaxs.name + ", yoshi : " + shaxs.age;
}

let natija = profilMalumot(user)

console.log(natija);

// 18+

const kiritshYoshi = (yosh) => {
    if(yosh >= 18) {
        return("Kirishga ruhsat etildi!")
    } else {
        return("18+ uzur yoshingiz yetmadi")
    }
}

console.log("Bunyodebek" , kiritshYoshi(20));
console.log("Miraziz", kiritshYoshi(15));
console.log("Hadicha", kiritshYoshi(17));
console.log("Robiya", kiritshYoshi(18));
console.log("MirJamol", kiritshYoshi(25));


// const user = [
//     {name: "Bunyodek", age: 20},
//     {name: "Miraziz", age: 15},
//     {name: "MirJamol", age: 25},
//     {name: "Robiya", age: 14},
//     {name: "Hadicha", age: 17},
// ]

const mevalar = ["apple", "cherry", "banana"]

const mevaTanlash = (royxat) => {
    return "birinchi meva " + royxat[2] 
}

console.log(mevaTanlash(mevalar))

const userlarniTanlash = (malumot) => {
    for (let i = 0; i < malumot.length; i++) {
        console.log(i + 1 + " 18+ " + malumot[i]);
        
    }
}

userlarniTanlash(["ali", "abu", "sam"])
    // const kiritishYoshi = (yosh) => {
    //     if(yosh >= 18) {
    //         return("Kirishga ruxsat etildi")
    //     } else {
    //         return("Uzur yoshingiz yetmadi")
    //     }
    // } 

    // console.log("hadicha" , kiritishYoshi(20));
    // console.log("hadicha" , kiritishYoshi(15));
    // console.log("hadicha" , kiritishYoshi(17));
    // console.log("hadicha" , kiritishYoshi(25));
    // console.log("hadicha" , kiritishYoshi(18));
*/


// const kiritishYoshi = (yosh) => {

//     if(yosh >= 18) {
//         return("Kirishga ruxsat etildi")
//     } else {
//         return("Uzur yoshingiz yetmadi")
//     }
// }
  

// const user = [
//     {name: "Lily" , age:20},
//     {name: "Xadicha" , age:18},
//     {name: "Khadija" , age:16},
//     {name: "Teacher" , age:14},
// ]

// console.log(user[0].name, kiritishYoshi(user[0].age));
// console.log(user[1].name, kiritishYoshi(user[1].age));
// console.log(user[2].name, kiritishYoshi(user[2].age));
// console.log(user[3].name, kiritishYoshi(user[3].age));  


const xayrliKun = () => {
    console.log("Xayrli kun, dasturchilar!");
}

xayrliKun ()



function kopaytir(son1, son2) {
    return son1 * son2;
}

let result1 = kopaytir(5, 4);
console.log(result1);




function toliqIsm(ism, familiya) {
    console.log(`Salom, ${ism} ${familiya}!`);
}

toliqIsm("Lily", "Igamberdiyeva");




function daraja(asos, daraja) {
    return asos ** daraja;
}

console.log(daraja(2, 4)); 




const car = {
    brand: "Chevrolet",
    model: "Gentra",
    color: "Qora",
    year: 2024
};

function mashinaMalumoti(car) {
    return `Brend: ${car.brand}, Modeli: ${car.model}, Rangi: ${car.color}, Yili: ${car.year}`;
}

console.log(mashinaMalumoti(car));




function imtihonBaho(ball) {
    if (ball >= 50) {
        return "Siz imtihondan o'tdingiz";
    } else {
        return "Siz imtihondan o'ta olmadingiz";
    }
}

console.log(imtihonBaho(75));



const kitob = {
    nomi: "Sariq devni minib",
    muallif: "Xudoyberdi To'xtaboyev",
    sahifa: 250
};

function kitobHaqida(kitob) {
    console.log(`Nomi: ${kitob.nomi}`);
    console.log(`Muallif: ${kitob.muallif}`);
    console.log(`Sahifa: ${kitob.sahifa}`);
}

kitobHaqida(kitob);




function juftYokiToq(son) {
    if (son % 2 === 0) {
        return "Bu son juft";
    } else {
        return "Bu son toq";
    }
}

console.log(juftYokiToq(8));




function kattasiniTop(son1, son2) {
    if (son1 > son2) {
        return "Birinchi son katta";
    } else {
        return "Ikkinchi son katta yoki teng";
    }
}

console.log(kattasiniTop(10, 7));