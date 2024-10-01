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
    let playCount = 0;

    function resetGame( ) {
        humanScore = 0;
        computerScore = 0;
        playCount = 0;
        roundNumber.textContent = ""
        document.querySelector("#gameScore").textContent = "";
        document.querySelector("#playerSelection").textContent = "";
        document.querySelector("#computerSelection").textContent = "";
        document.querySelector("#result").textContent = "";
    }
    if (playCount === 0) {
        roundNumber.textContent = "Round: 1";
    } else {
        roundNumber.textContent = "Round: " + (playCount + 1);
    }


    /* This section plays a round */
    function playRound (humanChoice, computerChoice) {
        if (humanChoice === "Rock" && computerChoice === "Paper") {
            console.log("You lose! Paper beats Rock");
            const playerSelection = document.querySelector("#playerSelection");
            playerSelection.textContent = "You chose: " + humanChoice;
            const computerSelection = document.querySelector("#computerSelection");
            computerSelection.textContent = "The computer chose: " + computerChoice;
            const result = document.querySelector("#result");
            result.textContent = "You lose! Paper beats Rock";
            computerScore += 1;
        }
        else if (humanChoice === "Paper" && computerChoice === "Scissors") {
            console.log("You lose! Scissors beats Paper");
            const playerSelection = document.querySelector("#playerSelection");
            playerSelection.textContent = "You chose: " + humanChoice;
            const computerSelection = document.querySelector("#computerSelection");
            computerSelection.textContent = "The computer chose: " + computerChoice;
            const result = document.querySelector("#result");
            result.textContent = "You lose! Scissors beats Paper";
            computerScore += 1;
        }
        else if (humanChoice === "Scissors" && computerChoice === "Rock") {
            console.log("You lose! Rock beats Scissors");
            const playerSelection = document.querySelector("#playerSelection");
            playerSelection.textContent = "You chose: " + humanChoice;
            const computerSelection = document.querySelector("#computerSelection");
            computerSelection.textContent = "The computer chose: " + computerChoice;
            const result = document.querySelector("#result");
            result.textContent = "You lose! Rock beats Scissors";
            computerScore += 1;
        }
        else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            console.log("You Win! Scissors beats Paper");
            const playerSelection = document.querySelector("#playerSelection");
            playerSelection.textContent = "You chose: " + humanChoice;
            const computerSelection = document.querySelector("#computerSelection");
            computerSelection.textContent = "The computer chose: " + computerChoice;
            const result = document.querySelector("#result");
            result.textContent = "You Win! Scissors beats Paper";
            humanScore += 1;
        }
        else if (humanChoice === "Paper" && computerChoice === "Rock") {
            console.log("You Win! Paper beats Rock");
            const playerSelection = document.querySelector("#playerSelection");
            playerSelection.textContent = "You chose: " + humanChoice;
            const computerSelection = document.querySelector("#computerSelection");
            computerSelection.textContent = "The computer chose: " + computerChoice;
            const result = document.querySelector("#result");
            result.textContent = "You Win! Paper beats Rock";
            humanScore += 1;
        }
        else if (humanChoice === "Rock" && computerChoice === "Scissors") {
            console.log("You Win! Rock beats Scissors");
            const playerSelection = document.querySelector("#playerSelection");
            playerSelection.textContent = "You chose: " + humanChoice;
            const computerSelection = document.querySelector("#computerSelection");
            computerSelection.textContent = "The computer chose: " + computerChoice;
            const result = document.querySelector("#result");
            result.textContent = "You Win! Rock beats Scissors";
            humanScore += 1;
        }
        else if (humanChoice === computerChoice) {
        console.log("It's a Draw!")
        const playerSelection = document.querySelector("#playerSelection");
        playerSelection.textContent = "You chose: " + humanChoice;
        const computerSelection = document.querySelector("#computerSelection");
        computerSelection.textContent = "The computer chose: " + computerChoice;
        const result = document.querySelector("#result");
        result.textContent = "It's a Draw!";
        console.log("-=-=-=-=-=-=-=-=-=-=-=-=")
        }
    }

    /* This section plays the game with buttons */
    let buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (playCount < 5) {
                let humanChoice = button.textContent;
                console.log(humanChoice);
                if (playCount === 0) {
                    roundNumber.textContent = "Round: 1";
                } else {
                    roundNumber.textContent = "Round: "+ (playCount +1);
                }
                playRound(humanChoice, getComputerChoice());
                playCount += 1;
                roundNumber.textContent = "Round: " + playCount;

                let gameScore = document.querySelector("#gameScore");
                if (playCount === 5) {   
                    if (humanScore > computerScore) {
                        console.log("You won!");
                        gameScore.textContent = "You won!\n Score was: " + humanScore + " X " + computerScore;
                    }
                    else if (humanScore < computerScore) {
                        console.log("You lost!");
                        gameScore.textContent = "You lost!\n Score was: " + humanScore + " X " + computerScore;
                    }
                    else if (humanScore === computerScore){
                        (console.log("It's a Draw!"));
                        gameScore.textContent = "It's a Draw!\n Score was: " + humanScore + " X " + computerScore;
                    }
                    document.querySelector("#playAgainButton").style.display = "block";
                }
            }
        }) 
    });
    document.querySelector("#playAgainButton").addEventListener("click", () => {
        resetGame();
        document.querySelector("#playAgainButton").style.display = "none";
    })
} ;

playGame();
