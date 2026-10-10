// Sayı pozitif negatif veya 0 olma durumu

// let number = 0
// if (number > 0){
//     console.log("sayı 0'dan büyük")
// }
// else if(number<0){
//     console.log("sayı 0'dan küçük")
// }
// else{
//     console.log("sayı 0'dır")
// }

// Sayının tek mi çift mi kontrolü
// let number = 99

// if (number % 2 == 0) {
//     console.log("sayımız çift")
// }
// else {
//     console.log("sayımız tek")
// }

//a,b,c en büyüğünü bulma
// let a = 30
// let b = 30
// let c = 30

// if (a > b && a > c) {
//     console.log("en büyük sayı a'dır")
// }
// else if (b > a && b > c) {
//     console.log("en büyük sayı b'dır")
// }
// else if (c > a && c > b) {
//     console.log("en büyük sayı c'dır")
// }
// else {
//     console.log("tüm sayılar eşit")
// }

// ******
// *****
// ****
// ***
// **
// *
// for (let i = 0; i < 6; i++) {
//     let stars = ""
//     for (let j = 6; j > i; j--) {
//         stars += "*"
//     }
//     console.log(stars)
// }

// *
// **
// ***
// ****
// *****
// for (let i = 1; i < 6; i++) {
//     let stars = ""
//     for (let j = 0; j < i; j++) {
//         stars += "*"
//     }
//     console.log(stars)
// }
// *****************************************
// Fonksiyonlar
function myFunction(n) {
    console.log("Hello " + n)
}

myFunction("Ali")
myFunction("Ayşe")
myFunction("Mehmet")


function add(a, b) {
    console.log(arguments)
    let total = 0
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    console.log(total)
}
add(3, 5)
add(50, 25, 17)
add(1, 2, 3, 4, 5, 6, 7)
function sum(a, b = 10) {
    console.log(a + b)
}
sum(1)


const multiply = function (a, b) {
    console.log(a * b)
}


// arrow function
const bölme = (a, b) => {
    console.log(a / b)
}

bölme(-2, 0)


// Objects

const student = {
    "name": "ali",
    "age": 20,
    "addres": {
        "city": "Kütahya",
        "street": "adnan menderes"
    },
    "grades": [10, 20, 100]
}
console.log(student.name)

console.log(student.grades[2])
console.log(student.addres.city)
student.name = "ayşe"
console.log(student.name)
delete student.age
console.log(student)


// ÖRNEK == ÖĞRENCİ NOT HESAPLAMA SİSTEMİ
// Öğrencilerin ortalaması, 
// Dersten geçme durumu
// Sınıf ortalaması, 
// En başarılı ve en başarısız öğrenci, 
// Toplam sınav sayısı, 
// Notlar toplamı
const students = [
    { name: "Ali", grades: [70, 80, 65] },
    { name: "Ayşe", grades: [90, 85, 95] },
    { name: "Mehmet", grades: [45, 60, 50] },
    { name: "Zeynep", grades: [30, 40, 35] },
    { name: "Can", grades: [75, 70, 80] }
];