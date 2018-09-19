const { RockPaperScissors } = require('./spec.helper')

describe('Rock Paper Scissors',() => {
    let rockPaperScissors = RockPaperScissors;

    it ('should exist', () => {
        expect(rockPaperScissors).to.exist;
    });

    it('returns PLAYER if rhs is the winner', () => {
        expect(rockPaperScissors.result("rock", "paper")).to.eql("PLAYER")
    })

    it('returns COMPUTER if rhs is the loser', () => {
        expect(rockPaperScissors.result("paper", "rock")).to.eql("COMPUTER")
    })

    it('returns EVEN if both match', () => {
        expect(rockPaperScissors.result("paper", "paper")).to.eql("EVEN")
    })

})