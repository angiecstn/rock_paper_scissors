const { RockPaperScissors } = require('./spec.helper')
const mockMath = Object.create(global.Math);
mockMath.random = () => 0; // computerchoice is always going to be rock
global.Math = mockMath; 


describe('Rock Paper Scissors',() => {
    let rockPaperScissors = new RockPaperScissors;

    it ('should exist', () => {
        expect(rockPaperScissors).to.exist;
    });

    describe('scenarios', function () {
    
        it('should return "it is a tie"', () => {
            expect(rockPaperScissors.play("rock")).to.eql("It's a tie!")
        })

        it('should return tie scenario', () => {
            expect(rockPaperScissors.play("scissors")).to.eql("You lost!")
        })

        it('should return "it is a tie" on "scissors" "scissors"', () => {
            expect(rockPaperScissors.play("paper")).to.eql("You won!")
        });
    });

})

   