const { RockPaperScissors } = require('./spec.helper')
const mockMath = Object.create(global.Math);
mockMath.random = () => 1;
global.Math = mockMath; 


describe('Rock Paper Scissors',() => {
    let rockPaperScissors = new RockPaperScissors;

    it ('should exist', () => {
        expect(rockPaperScissors).to.exist;
    });

    describe('tie scenario', function () {
    
        it('should return "it is a tie" on "scissors" "scissors"', () => {
            expect(rockPaperScissors.play("rock", "rock")).to.eql("It's a tie!")
        })

        it('should return tie scenario', () => {
            expect(rockPaperScissors.play("paper", "paper")).to.eql("It's a tie!")
        })

        it('should return "it is a tie" on "scissors" "scissors"', () => {
            expect(rockPaperScissors.play("scissors", "scissors")).to.eql("It's a tie!")
        });
    });


    describe('user wins', function () {
        it('should return player wins', () => {
            expect(rockPaperScissors.play("rock", "scissors")).to.eql("You won!")
        })

        it('should return "You won!" on "paper" "rock"', () => {
            expect(rockPaperScissors.play("paper", "rock")).to.eql("You won!")
        })

        it('should return "You won!" on "scissors" "paper"', () => {
            expect(rockPaperScissors.play("scissors", "paper")).to.eql("You won!")
        });
    });


    describe('computer wins', function () {
        it('should return player looses', () => {
            expect(rockPaperScissors.play("rock", "paper")).to.eql("You lost!")
        })

        it('should return "You lost!" on "paper" "scissors"', () => {
            expect(rockPaperScissors.play("paper", "scissors")).to.eql("You lost!")
        })

        it('should return "You lost!" on "scissors" "rock"', () => {
            expect(rockPaperScissors.play("scissors", "rock")).to.eql("You lost!")
        });
    });
})

   