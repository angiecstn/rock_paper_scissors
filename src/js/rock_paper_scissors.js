// let game = new RockPaperScissors()

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let random = Math.random(); // Returns number between 0 and 1
    random = random * 3; // Multiply by 3 to get n = [0..2] array
    const randomNumber = Math.floor(random);  //  ->  .floor to get int and not floats
    return choices [randomNumber];
}

// function win() {
//     userScore++;
//     userScore_span.innerHTML = userScore;
//     computerScore_Span = computerScore;
// }

function RockPaperScissors() {
    this.play = (userChoice) => {
        const computerChoice = getComputerChoice();
        switch (userChoice + "-" + computerChoice){
            case "rock-scissors":
            case "paper-rock":
            case "scissors-paper":
                return "You won!";
                break;
            case "rock-paper":
            case "paper-scissors":
            case "scissors-rock":
                return "You lost!";
                break;
            case "rock-rock":
            case "paper-paper":
            case "scissors-scissors":
                return "It is a tie!";
                break;
        }       
    }
}





