const { userScore } = 0;
const { computerScore } = 0;


function rockPaperScissors() {
    console.log ("hello");
    }

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random()*3);  //  -> .random to get random numbers between 0 and 3 .floor to get int and not floats
    return choices [randomNumber];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
    case "rock-scissors":
    case "paper-rock":
    case "scissors-paper":
        console.log("You won!");
        break;
    case "rock-paper":
    case "paper-scissors":
    case "scissors-rock":
        console.log("You lost!");
        break;
    case "rock-rock":
    case "paper-paper":
    case "scissors-scissors":
        console.log("It's a tie!");
        break;
    }
  }





