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
function getHumanChoice (choice) {
    
}
