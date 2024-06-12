const gameChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return gameChoices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    while(true) {
        let humanChoice = prompt("Rock, Paper, or Scissors?")
        humanChoice = humanChoice.toLowerCase();
    
        if (humanChoice === 'rock' || humanChoice == 'paper' || humanChoice == 'scissors') {
            return humanChoice;
        }
    }
 }

 function playRound() {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    if (
        (computerChoice === "rock" && humanChoice === "scissors")||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper")
    ) {
        computerScore++;
        console.log(`You lose! ${humanChoice} beats ${humanChoice}`)
    } else if (computerChoice === getHumanChoice) {
        console.log("It's a draw!")
    } else {
        humanScore++;
        console.log(`You win! ${computerChoice} beats ${computerChoice}`)
    }
 }

 function playGame(triesAmount) {
    humanScore = 0;
    computerScore = 0;

    for(let i = 0; i < triesAmount; i++) {
        playRound();
    }

    console.log("Final Scores:");
    console.log("Human Scores", humanScore);
    console.log("Computer Score", computerScore);

    if (humanScore > computerScore) {
        console.log("Congratulations! You won.");
    } else if (humanScore === computerScore) {
        console.log("It's a tie!")
    } else {
        console.log("Oh no! The computer won.")
    }
}
