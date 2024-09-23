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
    console.log("The Computer chose:", CPUresult);
    return CPUresult;
}

/* This section takes the human choice */
let humanChoice = prompt("Rock, paper or scissors?");
function getHumanChoice (choice) {
    if (humanChoice.toLowerCase() === "rock") {
        humanChoice = "Rock";
    }
    if (humanChoice.toLowerCase() === "paper") {
        humanChoice = "Paper";
    }
    if (humanChoice.toLowerCase() === "scissors") {
        humanChoice = "Scissors";
    }
    console.log("You chose:", humanChoice);
    return humanChoice;
}

/* This section keeps track of player's score */
let humanScore = 0;
let computerScore = 0;

/* This section plays a round */
function playRound (humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("You lose! Paper beats Rock")
    }
    else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("You lose! Scissors beats Paper")
    }
    else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log("You lose! Rock beats Scissors")
    }
    else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You Win! Scissors beats Paper")
    }
    else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You Win! Paper beats Rock")
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You Win! Rock beats Scissors")
    }
    else (console.log("It's a Draw! Play again"))
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);