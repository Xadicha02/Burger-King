// arraylar ozi nima uchun kerak
// arraylar bu => massiv yani royxatlar uchun ishlatamiz va bizga kerak boladigon jihati bu ozining tartibli index raqamiga ega  hohlagan payt istalgan malumotni togri holatda chaqirib olishimiz mumkin turgan tartib raqamida

// array methodlar nima uchun kerak?
//  array methodlar bizga bir qancha vazifani bajarib berish uchun kerak

// 1) isArray = arrayligini tekshirib beradi


// const tartibsizRaqamlar = [12, 34, 89, 0, 7, 90, "apple"]
// console.log(Array.isArray(tartibsizRaqamlar));

// if (tartibsizRaqamlar) {
//     alert("malumot array shaklida keldi")
// } else {
//     alert("malumot notogri xola")
// }

// 2) unshift() => boshiga qoshib beradi
//     push() => oxriga qoshib beradi

// tartibsizRaqamlar.unshift(30)
// tartibsizRaqamlar.push(88)


// pop() => oxirgi elemntni olib tashledi
// shift() => boshidan olib tashledi
// // tartibsizRaqamlar.shift();
// tartibsizRaqamlar.pop();
// console.log(tartibsizRaqamlar);

// inlude()=> searchgas oxshab elemntlarni topib beradi
// console.log(tartibsizRaqamlar.includes(12));

// splice => ickarida holhlagan index raqam orqali kesib beradi

// tartibsizRaqamlar.splice(1, 1, 99)
// console.log(tartibsizRaqamlar);


// tartibsizRaqamlar.sort((a, b) => b - a) 
// tartibsizRaqamlar.reverse()
// console.log(tartibsizRaqamlar);

// join() => elemntlarni bir birga qoshish uchun kerak

// let number = tartibsizRaqamlar.join(" ")
// console.log(number);


/*let taklif = ["ali", "nodir", "botir", "zokir", "muqimjon", "abubakir", "hikmatillo", "eldor"];

// 1. ali o'rniga yaxyo (splice ishlatsa bo'ladi yoki index orqali)
taklif[taklif.indexOf("ali")] = "yaxyo"

// 2. eldor o'rniga saidmurod
taklif[taklif.indexOf("eldor")] = "saidmurod"

// 3. muqimjon kemidi (o'chirish)
taklif.splice(4, 1)

// 4. hikmatillo kelolmidi (o'chirish)
taklif.splice(5, 1)

// 5. 0-indexga (1-o'ringa) rano qo'shish
taklif.unshift("rano")

// 6. 1-indexga (2-o'ringa) guli qo'shish
taklif.splice(1, 0, "guli")

console.log(taklif);
// Natija: ["rano", "guli", "yaxyo", "nodir", "botir", "zokir", "abubakir", "saidmurod"] */



// 1-
let mevalar = ["Olma", "Banan", "Gilos", "Shaftoli", "Anjir"];

mevalar.push("Kiwi")
mevalar.unshift("Behi")

console.log(mevalar.length);

// 2-
mevalar.includes("Gilos")
mevalar.indexOf("Shaftoli")
mevalar.indexOf("Tarvuz")

console.log(mevalar);

// 3-
mevalar.pop()

mevalar[2] = "Anor"
mevalar.splice(1, 1, "Qulupnay")

console.log(mevalar)


// 4-
let sonlar = [45, 10, 2, 1024, 91, 7, 29];

sonlar.sort((a, b) => a - b)
console.log(sonlar)
sonlar.reverse()
console.log(sonlar)
console.log(sonlar.join("-"))

let x = [5, 9, 8, 7, 11, 1024, 4086, 91, 17, 6];

x.sort((a, b) => a - b)

console.log(x)

let kichik = x[0]
let katta = x[x.length - 1]

console.log(katta - kichik)