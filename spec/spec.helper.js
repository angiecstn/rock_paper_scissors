const  fs = require('fs');
const  chai = require('chai');
global.expect = chai.expect;

let  RockPaperScissors = fs.readFileSync('./src/js/rock_paper_scissors.js');
eval( RockPaperScissors + `\nexports.RockPaperScissors = RockPaperScissors;`)

