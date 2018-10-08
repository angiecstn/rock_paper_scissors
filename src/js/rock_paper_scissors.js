const choices = ["rock", "paper", "scissors"]

function RockPaperScissors() {
    this.play = (userChoice) => {
        const computerChoice = choices[Math.floor(Math.random() *3)];
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





