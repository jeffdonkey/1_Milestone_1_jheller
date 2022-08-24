//this code works; static form

// simple fight. six results with no ties
let fightRPS = (Math.floor(Math.random()*6))
console.log(fightRPS)

// array of possible results
const fightResult = [
    "Rock breaks Scissors. You win",
    "Paper wraps Rock. You lose",
    "Paper wraps Rock. You win",
    "Scissors cuts Paper. You lose",
    "Scissors cuts Paper. You win",
    "Rock breaks Scissors. You lose",
]

console.log(fightResult[fightRPS])