// buttons
const btns = document.querySelectorAll('.startRound');
const refresh = document.querySelector('#refresh');

// points
let humanPoints = 0;
let pcPoints = 0;
const yourScore = document.querySelector('#yourScore');
const computerScore = document.querySelector('#computerScore');

// result div
const gameResult = document.querySelector('#result');
let whoWin = document.querySelector('#whoWin');

// reload page
refresh.addEventListener('click', () => {
    window.location.reload();
}); 

// choose weapon
btns.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.value;
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    });
});

//disable game buttons function
function disableButtons() {
    btns.forEach((button) => {
        button.disabled = true;
        button.style.backgroundColor = 'grey';
    });
}

// Computer function - random output from 3 elements (rock, paper or scissors)
let elemets = ["Rock", "Paper", "Scissors"];

//random value for pc generator
function computerPlay() {
    return elemets[Math.floor(Math.random() * elemets.length)].toLowerCase();
}

//check if player or computer has 5 points
function checkEnd(humanPoints, pcPoints) {
    if(humanPoints == 5) {
        gameResult.style.display = 'block';
        whoWin.textContent = "Congratulations,you won with computer!";        
        disableButtons();

    } else if (pcPoints == 5) {
        gameResult.style.display = 'block';
        whoWin.textContent = "Unfortunately, you lost with the computer";
        whoWin.style.color = 'var(--red)';
        disableButtons();
    }
}

// one round 
function playRound(playerSelection, computerSelection) {
    
    if(playerSelection == "rock") {
        if(computerSelection == "paper") {
            pcPoints++;            
        } else if (computerSelection == "scissors") {
            humanPoints++;
        } 
    } else if (playerSelection == "paper") {
        if(computerSelection == "rock") {
            humanPoints++;
        } else if (computerSelection == "scissors") {
            pcPoints++;
        } 
    } else if (playerSelection == "scissors") {
        if(computerSelection == "paper") {
            humanPoints++;
        } else if (computerSelection == "rock") {
            pcPoints++;
        } 
    }

    computerScore.textContent = pcPoints;
    yourScore.textContent = humanPoints;

    checkEnd(humanPoints, pcPoints);
}

