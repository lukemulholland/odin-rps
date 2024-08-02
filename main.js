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
    return computerChoice
}

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

//create a function that takes computerChoice and humanChoice as inputs
//determine the winner of the round
//update humanScore and computerScore values

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert("Tie!")
        // return { humanScore, computerScore };
    } else

    switch(humanChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                alert("You win! Rock beats scissors.");
                humanScore ++;
            } else if (computerChoice === "paper") {
                alert("You lose! Paper beats rock.");
                computerScore ++;
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                alert("You win! Paper beats rock.");
                humanScore ++;
            } else if (computerChoice === "scissors") {
                alert("You lose! Scissors beat paper");
                computerScore ++;
            }
            break;
        case "scissors":
            if (computerChoice === "paper") {
                alert("You win! Scissors beat paper");
                humanScore ++;
            } else if (computerChoice === "rock") {
                alert("You lose! Rock beats scissors");
                computerScore ++;
            }
            break;
        default:
            console.log("Invalid choice. Please choose rock, paper, or sissors.")
            // return { humanScore, computerScore };
    }
    // return { humanScore, computerScore };
}

//create two variables to store human score and computer score
let humanScore = 0;
let computerScore = 0;

//create a function that plays five rounds

function playGame() {
    //declare a counter variable that increments each time playRound is called
    let roundCounter = 0;

    //compare computer and human scores to announce overall winner after five rounds
    while (roundCounter < 5) {
        const computerSelection = getComputerChoice();
        console.log("Computer choice: ", computerSelection);
        
        const humanSelection = getHumanChoice();
        console.log("Human choice: ", humanSelection);
        
        playRound(humanSelection, computerSelection);
        roundCounter ++;
        
        console.log("Computer Score: ",computerScore);
        console.log("Human Score: ",humanScore);
        console.log("Rounds completed: ",roundCounter);    
    }

    if (humanScore > computerScore) {
        alert("You win the game!")
    } else if (computerScore > humanScore) {
        alert("Computer wins the game!")
    } else {
        alert("It's a tie")
    }
}

playGame();