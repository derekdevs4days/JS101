/* eslint-disable max-lines-per-function */
/*
1. Display the initial empty 3x3 board.
2. Ask the user to mark a square.
3. Computer marks a square.
4. Display the updated board state.
5. If it's a winning board, display the winner.
6. If the board is full, display tie.
7. If neither player won and the board is not full, go to #2
8. Play again?
9. If yes, go to #1
10. Goodbye!
*/
const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const PLAYER_MARKER = 'X';
const COMP_MARKER = 'O';

let playerScore = 0;
let compScore = 0;
let numberOfGames = 1;
let roundWinner = "";

let board = initilizeBoard();

function prompt(message) {
  console.log(`=> ${message}`);
}

// eslint-disable-next-line max-lines-per-function
// eslint-disable-next-line max-statements
function displayBoard() {
  console.clear();
  prompt(`Let's play tic tac toe! Best out of 5 wins.`);
  prompt(`You are ${PLAYER_MARKER}. Computer is ${COMP_MARKER}.`);
  prompt(`This is round ${numberOfGames}.`);
  prompt(`Player Score: ${playerScore}. Computer score: ${compScore}.`);
  prompt(roundWinner);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function initilizeBoard() {
  let board = {};

  for (let sq = 1; sq <= 9; sq++) {
    board[String(sq)] = INITIAL_MARKER;
  }
  return board;
}

function emptySq(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function joinOr(arr, symbol = ',', word = 'or') {
  const insertHere = arr.length - 1;
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return arr[0];
    case 2:
      return arr.join(` ${word} `);
    default:
      arr[insertHere] = `${word} ${arr[insertHere]}`;
      return arr.join(`${symbol} `);
  }
}

function playerChoosesSquare(board) {
  let square;

  while (true ) {
    prompt(`Choose a square ${joinOr(emptySq(board))}`);
    square = readline.question().trim();

    if (emptySq(board).includes(square)) break;
    prompt(`That is not a valid choice.`);
  }
  board[square] = PLAYER_MARKER;
}

function compChooseSquare(board) {
  let randomIdx = Math.floor(Math.random() * emptySq(board).length);

  let square = emptySq(board)[randomIdx];

  board[square] = COMP_MARKER;
}

function boardFull(board) {
  return emptySq(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

// eslint-disable-next-line max-lines-per-function
function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [ sq1, sq2, sq3 ] = winningLines[line];

    if (
      board[sq1] === PLAYER_MARKER &&
      board[sq2] === PLAYER_MARKER &&
       board[sq3] === PLAYER_MARKER
    ) {
      playerScore += 1;
      return 'Player';
    } else if (
      board[sq1] === COMP_MARKER &&
      board[sq2] === COMP_MARKER &&
      board[sq3] === COMP_MARKER
    ) {
      compScore += 1;
      return 'Computer';
    }
  }

  return null;
}

while (true) {

  while (true) {
    prompt(`This is round ${numberOfGames}.`);
    prompt(`Player Score: ${playerScore}. Computer score: ${compScore}.`);
    board = initilizeBoard();

    while (true) {
      displayBoard(board);

      playerChoosesSquare(board);
      displayBoard(board);
      if (someoneWon(board)) {
        roundWinner = 'Player won this round.';
        numberOfGames += 1;
        break;
      }

      compChooseSquare(board);
      displayBoard(board);
      if (someoneWon(board)) {
        roundWinner = 'Computer won this round.';
        numberOfGames += 1;
        break;
      }

      if (boardFull(board)) {
        roundWinner = `It's a tie.`;
        numberOfGames++;
        break;
      }
    }
    if (playerScore >= 3) {
      prompt('You won the game!');
      break;
    }

    if (compScore >= 3) {
      prompt('Computer won, better luck next time.');
      break;
    }

    if (numberOfGames > 6) {
      prompt(`It's a tie.`);
      break;
    }
  }

  prompt('Do you want to play again? (y / n)' );
  let playAgain = readline.question();
  while (playAgain !== 'y' && playAgain !== 'n') {
    prompt('Please enter y or n.');
    playAgain = readline.question();
  }
  if (playAgain !== 'y') {
    prompt("Thanks for playing. Goodbye!");
    break;
  }


}