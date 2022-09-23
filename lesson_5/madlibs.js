const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function postMadLibs(noun, verb, adjective, adverb) {
  prompt(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That\'s hilarious!`)
}

prompt('Welcome to Madlibs')

prompt('Enter a noun:');
let noun = readline.question();

prompt('Enter a verb:');
let verb = readline.question();

prompt('Enter an adjective:');
let adjective = readline.question();

prompt('Enter an adverb:');
let adverb = readline.question();

postMadLibs(noun, verb, adjective, adverb)
