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

function playGame (game) {
/*This section keeps track of player score */
    let humanScore = 0;
    let computerScore = 0;

    /* This section plays a round */
    function playRound (humanChoice, computerChoice) {
        if (humanChoice === "Rock" && computerChoice === "Paper") {
            console.log("You lose! Paper beats Rock");
            computerScore += 1;
        }
        else if (humanChoice === "Paper" && computerChoice === "Scissors") {
            console.log("You lose! Scissors beats Paper");
            computerScore += 1;
        }
        else if (humanChoice === "Scissors" && computerChoice === "Rock") {
            console.log("You lose! Rock beats Scissors");
            computerScore += 1;
        }
        else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            console.log("You Win! Scissors beats Paper")
            humanScore += 1;
        }
        else if (humanChoice === "Paper" && computerChoice === "Rock") {
            console.log("You Win! Paper beats Rock");
            humanScore += 1;
        }
        else if (humanChoice === "Rock" && computerChoice === "Scissors") {
            console.log("You Win! Rock beats Scissors");
            humanScore += 1;
        }
        else (console.log("It's a Draw! Play again"))
        console.log("-=-=-=-=-=-=-=-=-=-=-=-=")
    }


let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let humanChoice = button.textContent;
    console.log(humanChoice);
    const playerChoice = document.querySelector("#playerChoice");
    playerChoice.textContent = humanChoice;
    playRound(humanChoice, getComputerChoice());
  })
});


    console.log("You've played 5 times! The result is:", humanScore," X ", computerScore);
    if (humanScore > computerScore) {
        console.log("You won!");
    }
    else if (humanScore < computerScore) {
        console.log("You lost!")
    }
    else (console.log("It's a Draw!"));
}

playGame();
