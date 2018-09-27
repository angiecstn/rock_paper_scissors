const { RockPaperScissors } = require('../spec/spec.helper')
const BrowserHelpers = require('e2e_training_wheels')
const browser = new BrowserHelpers()
 
describe('User can input a value and get Rock Paper Scissors results', () => {
  before(async () => {
      await  browser.init()
      await  browser.visitPage('http://localhost:8080/')
  });

  beforeEach(async () => {
      await  browser.page.reload();
  })

  after(async ()=> {
      await  browser.close();
  })

  it('clicking on the "Rock" button', async () => {
    await browser.clickOnButton("input[value='Rock']")
    let content = await browser.getContent("[id='display_answer']")
    expect(content).to.eql('It is a tie!');
})
  
  it('clicking on the "Paper" button', async () => {
    await browser.clickOnButton("input[value='Paper']")
    let content = await browser.getContent("[id='result']")
    expect(content).to.eql('You won!');
  })
  
  it('clicking on the "Scissors" button', async () => {
    await browser.clickOnButton("input[value='Scissors']")
    let content = await browser.getContent("[id='result']")
    expect(content).to.eql('You lost!');
  })
})

