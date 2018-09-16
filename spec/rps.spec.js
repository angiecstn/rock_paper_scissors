const { rps } =  require('./spec.helper')

describe('Rock Paper Scissors', () => {
    let rps = new rps
})

it('returns PLAYER if rhs is the winner', () => {
    expect(rps.result("rock", "paper")).to.eql("PLAYER")
})

it('returns COMPUTER if rhs is the loser', () => {
    expect(rps.result("paper", "rock")).to.eql("COMPUTER")
})

it('returns EVEN if both match', () => {
    expect(rps.result("paper", "paper")).to.eql("EVEN")
})
