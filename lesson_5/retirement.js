const readline = require('readline-sync');

let age = Number(readline.question('What is your age? '));
let retirement = Number(readline.question('At what age would you like to retire? '));

let date = new Date();
let currentYear = date.getFullYear();
let retirementYear = currentYear + (retirement - age);

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.\nYou have only ${retirement - age} years of work to go!`);
