// Computer function - random output from 3 elements (rock, paper or scissors)

const elemets = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return elemets[Math.floor(Math.random() * elemets.length)].toLowerCase();
}

// player choice in round
function playerInput()  {
    let playerPrompt = prompt("Please enter Rock, Paper or Scissors", "Your choice");
    return playerPrompt.toLowerCase();
}

// one round with console.log output
function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection);
    
    if(playerSelection == "rock") {
        if(computerSelection == "paper") {
            console.log("You Lose! Paper beats Rock");
        } else if (computerSelection == "scissors") {
            console.log("You Win! Rock beats Scissors");
        } else {
            console.log("Draw!");
        }
    } else if (playerSelection == "paper") {
        if(computerSelection == "rock") {
            console.log("You Win! Paper beats Rock");
        } else if (computerSelection == "scissors") {
            console.log("You Lose! Scissors beats Paper");
        } else {
            console.log("Draw!");
        }
    } else if (playerSelection == "scissors") {
        if(computerSelection == "paper") {
            console.log("You Win! Scissors beats Paper");
        } else if (computerSelection == "rock") {
            console.log("You Lose! Rock beats Scissors");
        } else {
            console.log("Draw!");
        }
    } else {
        console.log ("Wrong User Input");
    }

}

// 5 times run playRound() and get computer and player selection
function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = playerInput();
        playRound(playerSelection, computerSelection);
    }
}

// start game
game();
