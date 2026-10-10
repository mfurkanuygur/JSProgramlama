// DEĞİŞKENLER
// var x=4
// let y=5
// const pi=3.14
// Değişken İsimlendirme Kuralları
//  let name="ahmet"
//  let userName="ali"
//  let UserName="ali"
//  let age2=20
//  let _name="ali"
//  let $name="ali"
//  let fruit
//  console.log(fruit)
//  fruit= null
//  console.log(fruit)

// Değişken Tipleri

// string
let name = "a"
let surname = "dasdasdasd"
let editingSurname = surname.toUpperCase()
console.log(editingSurname)
// number
let numberX = 2
let numberY = 2.5
let numberZ = 2.5123123123123

// boolean
let valueTrue = true
let valueFalse = false
// undefined
let test1
console.log("test1'in değeri", test1)
test1 = "ahasdhashd"
console.log("test1'in değeri", test1)
// null
let test2 = null
console.log(test2)
// array
let myArr = ["esdfad", 2, "e", ["s", "1"]]
console.log(myArr)
console.log(myArr[0])
console.log(myArr.length)
// objects
let car = {
    "marka": "mercedes",
    "model": "s serisi",
    "yıl": "2023"
}
console.log(car)
console.log(car.marka)
car.fiyat = "34"
console.log(car)

// OPERATÖRLER

// Aritmetik operatörler
console.log(3 + 5)
console.log(3 - 5)
console.log(5 * 4)
console.log(25 / 5)
console.log(5 % 4)
console.log(2 ** 5)

// Atama operatörler
let x = 4
x = x + 3
console.log(x)

x -= 3
console.log(x)
// Karşılaştırma operatörler
console.log(4 < 3)
console.log(4 > 3)
console.log(3 >= 3)
console.log(3 <= 3)
console.log(3 == 3)

let t1 = "3"
let t2 = 0
console.log(t1 == t2)
console.log(t1 === t2)
// Mantıksal operatörler
console.log(1 && 0)
console.log(1 || 0)

// KOŞULLAR
if (t2 > 0) {
    console.log("bu sayı 0 dan büyüktür")
}
else if (t2 == 0) {
    console.log("bu sayı 0dır")

}
else {
    console.log("bu sayı 0 dan küçüktür")

}

let result = t2 > 0 ? console.log("bu sayı 0 dan büyüktür") : console.log("bu sayı 0 dan küçüktür")

let day = "cuma"
switch (day) {
    case "pzt":
        console.log("günlerden pzt")
        break;
    case "sali":
        console.log("günlerden sali")
        break;
    case "çar":
        console.log("günlerden çar")
        break;
    default:
        console.log("yanlış gün ")
        break;
}

// DÖNGÜLER
for (let i = 10; i > 0; i--) {
    console.log("i nin değeri", i)
}
let t5=1
while (t5<5) {
    console.log("t5 nin değeri",t5)
    t5++
}
do {
    
} while (condition);
// const btn=document.getElementById("btn")
// btn.addEventListener("click",()=>{
//     alert("tıklandı")
// })