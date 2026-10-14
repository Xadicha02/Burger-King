let userBalance = 15000
let ticket = 20000

let result1 = userBalance >= ticket ? "Bilet sotib olindi" : "mablag' yetarli emas"
console.log(result1);



let score = 75 

let result2 = score >= 86 ? "A'lo" : score >= 71 ? "Yaxshi" : score >= 56 ? "Qoniqarli" : "yiqildi"
console.log(result2);



let cartItems = 0

let result3 = cartItems > 0 ? "Sizda" + cartItems + "mahsulot bor" : "Savatingiz hozircha bo'sh"
console.log(result3);




let isLightMode = false
let bodyColor = isLightMode ? "#ffff" : "#121212" 
console.log(bodyColor);


let data1 = "99";  //string
let data2 = 99;   //number

console.log(typeof data1);
console.log(typeof data2);


let inputData = false

let result6 = typeof inputData === "boolean" ? inputData : "Iltimos, faqat son kiriting"

console.log(result6) 


/*let foydalanuvchiIsmi = "Eldor";
let userAge = 22;
let bugungiSana = "2026-05-19";
let text1 = "Salom";


/*HTML/CSS   kebab-case   → .main-card
React   PascalCase   → UserProfile
JavaScript camelCase   → userProfile*/


let currentUserName;

let result9 = currentUserName ? "Xush kelibsiz, " + currentUserNamename : "Tizimga kirish cheklangan!" 
console.log(result9);



let checkType = typeof true

let result = checkType === "boolean" ? "To'g'ri tekshirildi" : "Xato"

console.log(result)     
