const firstname1 = ["Jon"]
const firstname2 = ["Arya"]
const lastname1 = ["Snow"]
const lastname2 = ["Stark"]
const male = ["Mr."]
const female = ["Ms."]


function detail1(male, firstname1, lastname1) {
    return `${male} ${firstname1} ${lastname1}`
}

function detail2(female, firstname2, lastname2) {
    return `${female} ${firstname2} ${lastname2}`
}

let greeting1 = detail1(male, firstname1, lastname1)
console.log("Greetings! " + greeting1)

let greeting2 = detail2(female, firstname2, lastname2)
console.log("Greetings! " + greeting2)
