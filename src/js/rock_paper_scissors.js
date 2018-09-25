const userScore = 0;
const computerScore = 0;

let game = new RockPaperScissors()
// document.querySelector("#rock").addEventListener("click", () => game.play("rock"))
// document.querySelector("#paper").addEventListener("click", () => game.play("paper"))
// document.querySelector("#scissors").addEventListener("click", () => game.play("scissors"))  moved to HTML in order to test (doc is not defined)

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let random = Math.random(); // Returns number between 0 and 1
    random = random * 3; // Multiply by 3 to get n = [0..3]
    const randomNumber = Math.floor(random);  //  -> .random to get random numbers between 0 and 3 .floor to get int and not floats
    return choices [randomNumber];
}

function RockPaperScissors() {
    this.play = (userChoice) => {
        console.log(userChoice)
        const computerChoice = getComputerChoice();
        switch (userChoice + "-" + computerChoice){
            case "rock-scissors":
            case "paper-rock":
            case "scissors-paper":
                console.log("You won!");
                return ("You won!")
                break;
            case "rock-paper":
            case "paper-scissors":
            case "scissors-rock":
                console.log("You lost!");
                return ("You lost!")
                break;
            case "rock-rock":
            case "paper-paper":
            case "scissors-scissors":
                console.log("It is a tie!");
                return ("It is a tie!")
                break;
        }       
    }
}





