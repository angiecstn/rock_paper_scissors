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
                return `You won! The computer choice is ${computerChoice}`;
                break;
            case "rock-paper":
            case "paper-scissors":
            case "scissors-rock":
                return `You lost! The computer choice is ${computerChoice}`;
                break;
            case "rock-rock":
            case "paper-paper":
            case "scissors-scissors":
                return `It is a tie! The computer choice is ${computerChoice}`;
                break;
        }       
    }
}





