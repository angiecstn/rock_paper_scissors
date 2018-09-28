function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let random = Math.random(); 
    random = random * 3; 
    const randomNumber = Math.floor(random); 
    return choices [randomNumber];
}

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





