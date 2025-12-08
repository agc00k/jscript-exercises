// Rock-Paper-Scissors JavaScript File

// Step 1: Logic for getting computer choice

const gpuChoice = Math.floor(Math.random() * 3);

function getGpuChoice(gpuVar) {
    if (gpuVar === 0) return "Rock";
    if (gpuVar === 1) return "Paper";
    return "Scissors";   
    } 

// Step 2: Logic for getting the human choice

const bioChoice = parseInt(prompt("Please select 0 for 'Rock', 1 for 'Paper', or 2 for 'Scissors': "));

function getBioChoice(bioVar) {
    if (bioVar === 0) return "Rock";
    if (bioVar === 1) return "Paper";
    return "Scissors";    
    }

// Step 3: Declare score variables

let bioScore = 0;
let gpuScore = 0;

// Step 4: Logic to play a single round

// Rules:
// Rock > Scissors
// Paper > Rock
// Scissors > Paper
// The player who picks the stronger of the two objects is the winner.
// If both players throw the same object, it’s a tie. In this situation, simply play again. 
// Continue doing this until there is a clear winner.
// Many people choose to do “best of 3” or “best of 5” since rock paper scissors is such a quick and easy game to play.

const bioSelection = getBioChoice(bioChoice);
const gpuSelection = getGpuChoice(gpuChoice);

function playRound(bioMove, gpuMove) {
    if (bioMove === "Rock" && gpuMove === "Scissors") return "You win! Rock beats Scissors";
    if (bioMove === "Paper" && gpuMove === "Rock") return "You win! Paper beats Rock";
    if (bioMove === "Scissors" && gpuMove === "Paper") return "You win! Scissors beats Paper";
    if (bioMove === "Rock" && gpuMove === "Paper") return "You lose! Paper beats Rock";
    if (bioMove === "Paper" && gpuMove === "Scissors") return "You lose! Scissors beats Paper";
    if (bioMove === "Scissors" && gpuMove === "Rock") return "You lose! Rock beats Scissors";
    return "It's a tie! Play again!";
}

console.log("Human: " + bioSelection);
console.log("Computer: " + gpuSelection);

console.log(playRound(bioSelection, gpuSelection));