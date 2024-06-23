// -- Start Function getComputerChoice --
// Get random choices for computer
// Use Math.Random to get random number from 0 -> less than 1
// Multiply with 10 to create a number from 0 -> less than 10
// Use Math.Floor to get round down the random number to nearest int
// If number less than 3, the computer will choose Rock
// If number more than/ equal 3 and less than / equal 6, the computer will choose Scissor
// Else the computer will choose Paper 
// -- End Function getComputerChoice --
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 10);
    let answer = null;

    if (randomNumber < 3) {
        answer = "Rock";
        displayComputerChoice("Rock");
    }
    else if (randomNumber >= 3 && randomNumber <= 6) {
        answer = "Scissor";
        displayComputerChoice("Scissor");
    }
    else {
        displayComputerChoice("Paper");
        answer = "Paper";
    }

    return answer;
}

function displayComputerChoice(computerChoice) {
    computerChoiceImg.setAttribute("src", `./images/${computerChoice}.png`);
}

function displayPlayerChoice(playerChoice) {
    playerChoiceImg.setAttribute("src", `./images/${playerChoice}.png`);
}

// Create variables to keep track human's score and computer's score
let playerScore = 0;
let computerScore = 0;

// -- Start Function playRound
//Get human choice and computer choice
// If human choice === computer choice so the result is equal
// End If
// Else 
// If human choice is Rock, check computer choice is paper/scissor
// If computer choice is paper then result is Player Lose, computerScore++
// If computer choice is scissor then result is Player Win, playerScore++
// Another human/computer choices do the same
// End Else
// Go to the next round
// -- End Function playRound
let playRound = function (playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        paraResult.textContent = "The result is equal!";
    }
    else {
        if (playerChoice === "Rock") {
            if (computerChoice === "Paper") {
                computerScore++;
                updateResult(`You lose! ${computerChoice} beats ${playerChoice}`);
            }
            else {
                playerScore++;
                updateResult(`You Win! ${playerChoice} beats ${computerChoice}`);
            }
        }

        else if (playerChoice === "Paper") {
            if (computerChoice === "Scissor") {
                computerScore++;
                updateResult(`You lose! ${computerChoice} beats ${playerChoice}`);
            }
            else {
                playerScore++;
                updateResult(`You Win! ${playerChoice} beats ${computerChoice}`);
            }
        }

        else {
            if (computerChoice === "Rock") {
                computerScore++;
                updateResult(`You lose! ${computerChoice} beats ${playerChoice}`);
            }
            else {
                playerScore++;
                updateResult(`You Win! ${playerChoice} beats ${computerChoice}`);
            }
        }
    }
}


// Start function playGame
// Loop function playRound 5 times
// After 5 round
// If player score > computer score. Show Message Player win
// If player score < computer score. Show Message Player Lose
// Else Show Message The Result is equal
function checkWhoWin() {
    /*
    for(let round = 1; round <= 5; round++) {
        playRound(getPlayerChoice(), getComputerChoice());
        console.log(`Round: ${round}.
            Player Score: ${playerScore}.
            Computer Score: ${computerScore}`);
    }
    */

    if (playerScore === winScore) {
        updateResult("Game Over. Player Win!");
    }

    else if (computerScore === winScore) {
        console.log("Game Over. Computer Win!");
    }

}

function updateResult(result) {
    paraResult.textContent = result;
    paraPlayerScore.textContent = `Player Score: ${playerScore}`;
    paraComputerScore.textContent = `Computer Score: ${computerScore}`;

    if (playerScore === winScore) {
        paraResult.textContent = "Game Over. Player Win!";
        isGameOver = true;
    }

    else if (computerScore === winScore) {
        paraResult.textContent = "Game Over. Computer Win!";
        isGameOver = true;
    }
}

// Event
let rockButton = document.querySelector("#rock-btn");
let paperButton = document.querySelector("#paper-btn");
let scissorButton = document.querySelector("#scissor-btn");

let paraResult = document.querySelector("#result");
let paraPlayerScore = document.querySelector("#player-score");
let playerChoiceImg = document.querySelector("#player-choice-img");
let paraComputerScore = document.querySelector("#computer-score");
let computerChoiceImg = document.querySelector("#computer-choice-img");

let winScore = 5;
let isGameOver = false;

rockButton.addEventListener("click", () => {
    if (isGameOver === false) {
        displayPlayerChoice("Rock");
        playRound("Rock", getComputerChoice())
    }
    else {
        alert("The game is over!");
    }
});

paperButton.addEventListener("click", () => {
    if (isGameOver === false) {
        displayPlayerChoice("Paper");
        playRound("Paper", getComputerChoice())
    }
    else {
        alert("The game is over!");
    }
});

scissorButton.addEventListener("click", () => {
    if (isGameOver === false) {
        displayPlayerChoice("Scissor");
        playRound("Scissor", getComputerChoice())
    }
    else {
        alert("The game is over!");
    }
});

//playGame();
