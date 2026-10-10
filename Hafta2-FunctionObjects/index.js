// // *****
// // ****
// // ***
// // **
// // *

// for (let i = 0; i < 5; i++) { 
//     let stars=""
//     for(let j=5;j>i;j--){
//         stars+="*"
//     }
//     console.log(stars)
// }

// for (let i = 1; i < 6; i++) {
//     let stars = ""
//     for (let j = 0; j < i; j++) {
//         stars += "*"
//     }
//     console.log(stars)
// }


// function sum(a, b) {
//     console.log(arguments)
//     let total = 0
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i]
//     }
//     console.log(total)
// }
// sum(1, 2, 3, 4)


const students = [
    { name: "Ali", grades: [70, 80, 65] },
    { name: "Ayşe", grades: [90, 85, 95] },
    { name: "Mehmet", grades: [45, 60, 50] },
    { name: "Zeynep", grades: [30, 40, 35] },
    { name: "Can", grades: [75, 70, 80] }
];

const allResult = () => {
    for (let i = 0; i < students.length; i++) {
        console.log("---------- " + students[i].name + " ----------")
        calculateStudentAverage(students[i])
    }
    console.log("________________________________")

    console.log("Sınıf ortalaması: ", calculateClassAverage(students))
    console.log("En başarılı öğrenci: ", biggestAverage(students).bestStudentName + " - " + biggestAverage(students).average)
    console.log("En başarısız öğrenci: ", biggestAverage(students).worstStudentName + " - " + biggestAverage(students).worstAvg)
}
allResult()

//Öğrenci ortalaması
function calculateStudentAverage(student) {
    let total = 0
    for (let i = 0; i < student.grades.length; i++) {
        console.log((i + 1) + ".Not" + " : " + student.grades[i])
        total += student.grades[i]
    }
    let average = Math.round(total / student.grades.length)
    console.log("Ortalama:" + average)
    checkStudentStatus(average)
}

//Öğrenci geçme durumu
function checkStudentStatus(average) {
    if (average >= 50) {
        console.log("Ders durumu: Geçti")
    }
    else {
        console.log("Ders durumu:Kaldı")
    }
}

//Sınıf ortalaması
function calculateClassAverage(students) {
    let total = 0
    let numberofExam = 0
    for (let i = 0; i < students.length; i++) {
        numberofExam += students[i].grades.length
        for (let j = 0; j < students[i].grades.length; j++) {
            total += students[i].grades[j]
        }
    }
    console.log("Toplam sınav sayısı: ", numberofExam)
    console.log("Notlar toplamı: ", total)
    return Math.round(total / numberofExam)
}

function biggestAverage(students) {
    let bestAvg = 0
    let worstAvg = 100
    let average
    let bestStudentName
    let worstStudentName
    for (let i = 0; i < students.length; i++) {
        let total = 0
        for (let j = 0; j < students[i].grades.length; j++) {
            total += students[i].grades[j]
        }
        average = Math.round(total / students[i].grades.length)

        if (bestAvg < average) {
            bestAvg = average
            bestStudentName = students[i].name
        }

        if (average < worstAvg) {
            worstAvg = average
            worstStudentName = students[i].name
        }
    }
    return { "average": bestAvg, "bestStudentName": bestStudentName, "worstAvg": worstAvg, "worstStudentName": worstStudentName }
}

