/*// Mantiqiy opertorlar => &&, , !

// && => va uchun misol


// true true true
// true false false
// true true false 
// false false false

console.log( "1", true&&true);
console.log( "2", true&&false);
console.log( "3", false&&true);
console.log( "4", false&&false);

let age = 18 
let hasticket = true

let natija1 = age >= 18 && hasticket
console.log(natija1)

if (natija1) {
    console.log("Kirishg ruhsat etildi");
    
} else {
    console.log("uzur sizda bitta muammo bor");
    
}

//  => yoki uchun misol
// true true true => true
// true false true => true
// false true true => true
// false false false => false

// console.log( "1", true||true);
// console.log( "2", true||false);
// console.log( "3", false||true);
// console.log( "4", false||false);


let admin = true
let password = false

if(admin || password) {
    console.log("Platformaga kirish mumkin");
    
} else {
    console.log("Kirish mumkin emas");
}

// ! => not emas 

isLogin = true

let natija2 = !isLogin
console.log(natija2); */


let age = 18 
let hasticket = true

let result1 = age >= 18 && hasticket
console.log("Task1: Kinoga kira olishi mumkin!",result1)


let admin = true
let moderator = true    

if(admin || moderator) {
    console.log("Task2: Maxsus sahifaga kirish mumkin");
    
} else {
    console.log("Kirish mumkin emas");
}


let isLogin = false

let result3 = !isLogin
console.log("Task3: Tizimga kirmadingiz!",result3); 

let age2 = 16;
let hasTicket = false;

if (age2 >= 18 && hasTicket) {
    console.log("Siz kinoga kira olasiz.");
} else {
    if (!hasTicket || age2 < 18) {
        console.log("Siz kinoga kira olmaysiz.");
    }
}

let isLoggedIn = true;
let isAdmin = false;

if (!isLoggedIn) {
    console.log("Siz tizimga kirmagansiz.");
} else if (isAdmin) {
    console.log("Admin sahifasiga kirishingiz mumkin.");
} else {
    console.log("Siz oddiy foydalanuvchisiz.");
}