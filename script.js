console.log ("This is a Rock Paper Scissors Game");

/* This section randomizes and shows a CPU choice */
function getComputerChoice (choice) {
    let CPUresult = Math.floor(Math.random() * 3);
    if (CPUresult === 0)  {
        CPUresult = 'Rock';
    }
    if (CPUresult === 1) {
        CPUresult = 'Paper';
    }
    if (CPUresult === 2) {
        CPUresult = 'Scissors';
    }
    return CPUresult;

}
console.log(getComputerChoice());

/* This section takes the human choice */
let humanChoice = prompt("Rock, paper or scissors?");

function getHumanChoice (choice) {
    if (humanChoice === "Rock" || "rock") {
        humanChoice = "Rock";
    }
    if (humanChoice === "Paper" || "paper") {
        humanChoice = "Paper";
    }
    if (humanChoice === "Scissors" || "scissors") {
        humanChoice = "Scissors";
    }
    return humanChoice;
}
console.log(getHumanChoice());

/* This section keeps track of player's score */
let humanScore = 0;
let computerScore = 0;

function playRound (play) {
    
}