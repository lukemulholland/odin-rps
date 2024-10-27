//create two variables to store human score and computer score
let humanScore = 0;
let computerScore = 0;

//create a variable that can store a random number
//generate a random number
//map random number to one of the string variables (rock, paper, scissors)
//store the string output

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
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
    }
}

// function playRound(humanChoice, computerChoice) {
//     let result = '';
//     if (humanChoice === computerChoice) {
//         result = "Tie!";
//     } else {
//         switch(humanChoice) {
//             case "rock":
//                 result = computerChoice === "scissors" ? "You win! Rock beats scissors." : "You lose! Paper beats rock.";
//                 computerChoice === "scissors" ? humanScore++ : computerScore++;
//                 break;
//             case "paper":
//                 result = computerChoice === "rock" ? "You win! Paper beats rock." : "You lose! Scissors beat paper.";
//                 computerChoice === "rock" ? humanScore++ : computerScore++;
//                 break;
//             case "scissors":
//                 result = computerChoice === "paper" ? "You win! Scissors beat paper." : "You lose! Rock beats scissors.";
//                 computerChoice === "paper" ? humanScore++ : computerScore++;
//                 break;
//             default:
//                 result = "Invalid choice. Please choose rock, paper, or scissors.";
//         }
//     }
//     alert(result);
// }

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