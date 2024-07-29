console.log("Hello, World")

//create a variable that can store a random number
//generate a random number
//map random number to one of the string variables (rock, paper, scissors)
//store the string output

function getComputerChoice() {
    let randomNumber = Math.random();
    let computerChoice;
    if (randomNumber <= 0.33) {
        computerChoice = "rock"
    } else if (randomNumber <= 0.66) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
    
    return computerChoice;
}

console.log(getComputerChoice())

//create a variable that can store human choice (rock, paper, scissors)
//create input function for user selection
//validate that the input is either rock, paper or scissors

function getHumanChoice() {
    const choices = ["rock","paper","scissors"];
    let humanChoice = prompt ("Choose rock, paper or scissors").toLowerCase();
    while (!choices.includes(humanChoice)) {
        humanChoice = prompt("Invalid choice. Please choose rock, paper, or scissors").toLowerCase()
    }
    return humanChoice
}

console.log(getHumanChoice())

