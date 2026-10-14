// Trenery shart operatori nima uchun kerak ozi?

// Bu opertor biror bir shartni tekshirish uchun kerak if elsedan farqi joyni katta egallamedi yani bitta qatorda yozsa boladi

// Yolzishi tartibi:

// shart ? rost bolganda qiymat : yolgon shart qiymat

// ? => nima degani yoki shu shart to'grimi
// : => aks holda 

// condition ? value_if_true : value_if_false
let natija = 5 >= 7 ? "open" : "close"; console.log((natija));


////////////////////if else //////////////////////////////
let a = 5
if(a >= 7) {
    console.log("open"); 
}else {
    console.log("close");
}


let year = 2009;
let age = 2026-year; //17

let natija1 = age >= 17 ? "ruhsat kirishga" : "ruhsat berilmasin"; console.log(natija1);


let price = 500;
let discount = price > 400 ? "10% chegirma mavjud" : "chegirma mavjud emas" 
console.log(discount);

let isDarkmode = false;
let backgroundColor = isDarkmode ? "#000" : "#fff";
console.log(backgroundColor);

let number1 = 17889
let result = number1 % 2 === 0 ? "just son" : "toq son"; console.log(result);

// type of nima uchun kerak?

// kelyotkagan qiymatlarni turni aniqlash uchun kerak

let ism = "ali";
let yosh = 26;
let isStuent = true;
let score = null;
let city;

console.log(typeof ism)
console.log(typeof yosh)
console.log(typeof isStuent)
console.log(typeof score)
console.log(typeof city )


let number = 10
let natija = number % 2 === 0 ? "Juft son" : "Toq son"
console.log(natija);
