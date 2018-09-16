const userScore = 0;
const computerScore = 0;


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random()*3);  //  -> .random to get random numbers between 0 and 3 .floor to get int and not floats
    return choices [randomNumber];
}
console.log (getComputerChoice());


function game(userChoice) {

}