const person = {
    ad: "ali",
    yas: 25,
    şehir: "sivas",
    yemekler: ["a", "b", "c"],

}
console.log(person.ad)
person.ad = "ayşe"
console.log(person.ad)


console.log(person.şehir)
console.log(person.yemekler[2])

let objectPropertyName = "ad"

console.log(person[objectPropertyName])


person.color = "red"
console.log(person.color)

// Diziler

const meyveler = ["Elma", "Armut", "Armut", "Muz"];

console.log(meyveler[0])
console.log(meyveler.length)

meyveler[0] = "Çilek"
console.log(meyveler)

// meyveler.push("karpuz")
// console.log(meyveler)

// meyveler.unshift("karpuz")
// console.log(meyveler)


// meyveler.pop()
// console.log(meyveler)

// meyveler.shift()
// console.log(meyveler)

// meyveler.splice(1,2)
// console.log(meyveler)


// console.log(meyveler.slice(2,5))

console.log(meyveler)
console.log(meyveler.includes("Armut"))
console.log(meyveler.indexOf("Armut"))
console.log(meyveler.find(m => m == "Armut"))

meyveler.sort();
console.log(meyveler)
meyveler.reverse()
console.log(meyveler)

const sayilar = [40, 5, 100, 25, 9];
sayilar.sort()
console.log(sayilar)
sayilar.sort((a, b) => b - a)
console.log(sayilar)

const kare = sayilar.map(s => s ** 2)
console.log(kare)
console.log(sayilar)

const sart=sayilar.filter(s=>s>30)
console.log(sart)