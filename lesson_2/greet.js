const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function greet(name) {
  if (name.includes("!")) {
    prompt(`HELLO ${name.slice(0, -1).toUpperCase()}. WHY ARE WE SCREAMING?`);
  } else {
    prompt(`Hello ${name}.`)
  }
}

prompt('What is your name?\n');
let response = readline.question();

greet(response)

