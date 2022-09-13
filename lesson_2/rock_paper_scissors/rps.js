const readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

let playerScore = 0;
let comScore = 0;
let turns = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

function diplayWinner(choice, comChoice) {
  prompt(`You chose ${choice}, computer chose ${comChoice}`);

  if (WINNING_COMBOS[choice].includes(comChoice)) {
    prompt('You win this round! ');
  } else if (choice === comChoice) {
    prompt('It\'s a tie.');
  } else {
    prompt('You lose this round.');
  }
}

function scoreCoutner(choice, comChoice) {
  if (WINNING_COMBOS[choice].includes(comChoice)) {
    playerScore++;
  } else if (choice === comChoice) {
    playerScore += 0;
    comScore += 0;
  } else {
    comScore++;
  }
  turns++;
}

prompt(`Let's play rock paper scissors spock lizard! Best out of 5 wins!`);
while (true) {

  while (true) {
    prompt(`This is round ${turns}.`);
    prompt(`Please choose one: ${VALID_CHOICES.join(', ')}`);
    let choice = readline.question();
    while (!VALID_CHOICES.includes(choice)) {
      prompt('Enter a valid choice.');
      choice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * 5);
    let comChoice = VALID_CHOICES[randomIndex];


    diplayWinner(choice, comChoice);

    scoreCoutner(choice, comChoice);

    prompt(`Current Score => Player: ${playerScore} Computer: ${comScore}`);

    const WIN = `The game is over... You are the winner! You have ${playerScore} points and the computer has ${comScore} points.`;
    const LOSE = `The game is over... You lost. You have ${playerScore} points and the computer has ${comScore} points.`;
    const TIE = `The game is over... It's a tie! You have ${playerScore} points and the computer has ${comScore} points.`;

    if (playerScore > 2) {
      prompt(WIN);
      break;
    }

    if (comScore > 2) {
      prompt(LOSE);
      break;
    }

    if (turns === 5 && playerScore === comScore) {
      prompt(TIE);
      break;
    } else if (turns === 5 && playerScore > comScore) {
      prompt(WIN);
      break;
    } else if (turns === 5 && playerScore < comScore) {
      prompt(LOSE);
      break;
    }
  }

  playerScore = 0;
  comScore = 0;
  turns = 0;

  prompt('Do you want to play again? (y/n)');
  let answer = readline.question().toLowerCase();
  console.clear();
  while (answer !== 'y' && answer !== 'n') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer !== 'y') {
    prompt('Thanks for playing!');
    break;
  }
}