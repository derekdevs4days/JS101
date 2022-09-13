const readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function diplayWinner(choice, comChoice) {

  prompt(`You chose ${choice}, computer chose ${comChoice}`);

  if ((choice === 'rock' && comChoice === 'scissors') ||
 (choice === 'rock' && comChoice === 'lizard') ||
 (choice === 'paper' && comChoice === 'rock') ||
 (choice === 'paper' && comChoice === 'spock') ||
 (choice === 'scissors' && comChoice === 'paper') ||
 (choice === 'scissors' && comChoice === 'lizard') ||
 (choice === 'lizard' && comChoice === 'paper') ||
 (choice === 'lizard' && comChoice === 'spock') ||
 (choice === 'spock' && comChoice === 'rock') ||
 (choice === 'spock' && comChoice === 'scissors')) {
    prompt('You win!');
  } else if ((choice === 'rock' && comChoice === 'paper') ||
 (choice === 'rock' && comChoice === 'spock') ||
 (choice === 'paper' && comChoice === 'lizard') ||
 (choice === 'paper' && comChoice === 'scissors') ||
 (choice === 'scissors' && comChoice === 'spock') ||
 (choice === 'scissors' && comChoice === 'rock') ||
 (choice === 'lizard' && comChoice === 'rock') ||
 (choice === 'lizard' && comChoice === 'scissors') ||
 (choice === 'spock' && comChoice === 'paper') ||
 (choice === 'spock' && comChoice === 'lizard')) {
    prompt('You lose.');
  } else {
    prompt('It\'s a tie.');
  }
}

while (true) {
  prompt(`Please choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();
  while (!VALID_CHOICES.includes(choice)) {
    prompt('Enter a valid choice.');
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * 5);
  let comChoice = VALID_CHOICES[randomIndex];

  diplayWinner(choice, comChoice);
  prompt('Do you want to play again? (y/n)');
  let answer = readline.question().toLowerCase();

  while (answer !== 'y' && answer !== 'n') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer !== 'y') {
    prompt('Thanks for playing!');
    break;
  }
}