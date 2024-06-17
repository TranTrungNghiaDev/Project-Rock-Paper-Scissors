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
    }
    else if (randomNumber >= 3 && randomNumber <= 6) {
        answer = "Scissor";
    }
    else {
        answer = "Paper";
    }

    return answer;
}

// -- Start function getplayerChoice
// Show the message to ask user input their choice
// Change user's input to lowercase to easy compare
// If user's input correct then isAnswerCorrect = true
// Return their answer
// While isAnswerCorrect = false
// Show message : "The input is wrong! Try again" then make user input their answer again
// Do it until isAnswerCorrect = true
// -- End function getplayerChoice
function getPlayerChoice() {
    let answer = prompt("Input your choice (Rock/Paper/Scissor) here :").toLowerCase();
    answer = answer.replace(answer[0], answer[0].toUpperCase());
    let isAnswerCorrect = false;

    do {
        if (answer == "Rock" || answer == "Paper" || answer == "Scissor") {
            isAnswerCorrect = true;
        }
        else {
            answer = prompt("Your input is not correct! Try again.").toLowerCase();
            answer = answer.replace(answer[0], answer[0].toUpperCase());
        }
    }

    while (isAnswerCorrect == false)

    return answer;
}



// Start function playGame
// Loop function playRound 5 times
// After 5 round
// If player score > computer score. Show Message Player win
// If player score < computer score. Show Message Player Lose
// Else Show Message The Result is equal
function playGame() {
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
            console.log("The result is equal!");
        }
        else {
            if (playerChoice === "Rock") {
                if (computerChoice === "Paper") {
                    console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
                    computerScore++;
                }
                else {
                    console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
                    playerScore++;
                }
            }

            else if (playerChoice === "Paper") {
                if (computerChoice === "Scissor") {
                    console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
                    computerScore++;
                }
                else {
                    console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
                    playerScore++;
                }
            }

            else {
                if (computerChoice === "Rock") {
                    console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
                    computerScore++;
                }
                else {
                    console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
                    playerScore++;
                }
            }
        }
    }

    for(let round = 1; round <= 5; round++) {
        playRound(getPlayerChoice(), getComputerChoice());
        console.log(`Round: ${round}.
            Player Score: ${playerScore}.
            Computer Score: ${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log("Player Win!");
    }

    else if (playerScore < computerScore) {
        console.log("Computer Win!");
    }
    else {
        console.log("The result is equal!");
    }
}

playGame();