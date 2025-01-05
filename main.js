//create two variables to store human score and computer score
let humanScore = 0;
let computerScore = 0;
let roundCounter = 0; //create variable to count rounds

//generate a random computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

//get player choice from button click and play round
// Select all buttons
const buttons = document.querySelectorAll("button");

// Add click event listeners to each button
buttons.forEach(button => {
    button.addEventListener("click", () => {
        let humanChoice = button.value; // Get the value of the clicked button
        let computerChoice = getComputerChoice(); // Get the computer's choice
        playRound(humanChoice, computerChoice); // Pass the value to the game function

        //select div to display results
        const resultsDiv = document.querySelector("#result");

        // Clear previous content
        resultsDiv.innerHTML = "";

        // Create and append human choice
        const humanChoiceElement = document.createElement("p");
        humanChoiceElement.textContent = "Human choice: " + humanChoice;
        resultsDiv.appendChild(humanChoiceElement);

        // Create and append computer choice
        const computerChoiceElement = document.createElement("p");
        computerChoiceElement.textContent = "Computer choice: " + computerChoice;
        resultsDiv.appendChild(computerChoiceElement);

        // Create and append round result
        const scoreDiv = document.querySelector("#score");

        // Clear previous content
        scoreDiv.innerHTML = "";

        // Create and append human choice
        const humanScoreElement = document.createElement("p");
        humanScoreElement.textContent = "Human score: " + humanScore;
        resultsDiv.appendChild(humanScoreElement);

        // Create and append computer choice
        const computerScoreElement = document.createElement("p");
        computerScoreElement.textContent = "Computer score: " + computerScore;
        resultsDiv.appendChild(computerScoreElement);

        // Check if either player has reached 5 points
        if (humanScore === 5 || computerScore === 5) {
            const winner = humanScore === 5 ? "Human" : "Computer";
            alert(winner + " wins the game!");
            resetGame(); // Reset the game
        }
    });
});

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