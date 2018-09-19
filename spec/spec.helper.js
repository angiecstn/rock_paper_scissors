const  fs = require('fs');
const  chai = require('chai');
global.expect = chai.expect;

let rockPaperScissors = fs.readFileSync('./src/js/rock_paper_scissors.js');
eval( rockPaperScissors + `\nexports.RockPaperScissors = RockPaperScissors;`)

