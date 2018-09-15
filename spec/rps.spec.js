const { rps } =  require('./spec.helper')

describe('Rock Paper Scissors', () => {
    let rps = new rps
})

it('returns a number if no game rules are met', () => {
    expect(rps.check(1)).to.eql(1)
})