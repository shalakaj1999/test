const chalk = require('chalk');
const validator = require('validator');

//console.log(chalk.red.underline.inverse("false"));

const res = validator.isEmail("thappa@thappa.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
console.log(res);