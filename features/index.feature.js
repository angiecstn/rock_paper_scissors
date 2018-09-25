const { rock_paper_scissors } = require('chai');
const BrowserHelpers = require('e2e_training_wheels');
const browser = new BrowserHelpers();
 
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
})

  it('clicking on the "rock" button', async () => {
    await browser.clickOnButton("input[value='Rock']")
    let content = await browser.getContent("[id='result']")
    expect(content).to.eql(result);
  })

  it('clicking on the "paper" button', async () => {
    await browser.clickOnButton("input[value='Paper']")
    let content = await browser.getContent("[id='result']")
    expect(content).to.eql(result);
  })

  it('clicking on the "scissors" button', async () => {
    await browser.clickOnButton("input[value='Scissors']")
    let content = await browser.getContent("[id='result']")
    expect(content).to.eql(result);
  })
