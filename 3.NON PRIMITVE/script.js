 /*non-primitive bu --- ichida bir qancha ma'lumot saqleydigan murakkab turlar

Array va Objectlardan ma'lumotlarni bittalab chiqarib olish uchun:
Array = [index raqamini kiritgan holatda] 
Object olish uchun nuqtadan (.) foydalanmiz*/

// 1) Object => massiv 
const user = {
   id: 1 ,
   name : "Hadicha" ,
   firstname: "Igamberdiyeva" ,
   age: 15,
   location:"Andijon Maydon" 
}

console.log("ismi: ", user.name)
console.log("manzil: ", user.location)

// 2) Arraylar => maxsus tartib raqamiga ega
//                   0          1         2         3
const fruits = ["banana", "cherry", "orange", "apple"]
console.log(fruits[0])

console.log ("sotib olingan meva: " + fruits[2]);

const numbers = [12, 56, 89, 9, 37]
console.log(numbers[3]);

// 3)function => funksiyalar

function kvadratHisoblagich (un, suv) {   //parametr
    return un + suv
}

const result = kvadratHisoblagich(8, 3) //argument
console.log("result: ", result);
