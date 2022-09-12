const readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

while (true) {
prompt(`Please choose one: ${VALID_CHOICES.join(', ')}`);
let choice = readline.question();
while (!VALID_CHOICES.includes(choice)) {
  prompt('Enter a valid choice.');
  choice = readline.question();
}

let randomIndex = Math.floor(Math.random() * 3);
let comChoice = VALID_CHOICES[randomIndex];



function diplayWinner(choice, comChoice) {

  prompt(`You chose ${choice}, computer chose ${comChoice}`);

if((choice === 'rock' && comChoice === 'scissors') ||
   (choice === 'paper' && comChoice === 'rock') ||
   (choice === 'scissors' && comChoice === 'paper')) {
     prompt('You win!')
   } else if ((choice === 'rock' && comChoice === 'paper') ||
   (choice === 'paper' && comChoice === 'scissors') ||
   (choice === 'scissors' && comChoice === 'rock')) {
     prompt('You lose.')
   } else {
     prompt('It\'s a tie.')
   }
}

diplayWinner(choice, comChoice);
prompt('Do you want to play again? (y/n)');
let answer = readline.question().toLowerCase();

while (answer !== 'y' && answer !== 'n') {
  prompt('Please enter "y" or "n".');
  answer = readline.question().toLowerCase();
} 
if (answer !== 'y') {
  prompt('Thanks for playing!')
  break;
}
}