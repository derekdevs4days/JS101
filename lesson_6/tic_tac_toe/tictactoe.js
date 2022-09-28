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

let board = initilizeBoard();

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayBoard() {
  console.clear();
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

function playerChoosesSquare(board) {
  let square;


  while (true ) {
    prompt(`Choose a square (${emptySq(board).join(', ')}) `);
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
      return 'Player';
    } else if (
      board[sq1] === COMP_MARKER &&
      board[sq2] === COMP_MARKER &&
      board[sq3] === COMP_MARKER
    ) {
      return 'Computer';
    }
  }

  return null;
}


while (true) {
  displayBoard(board);

  playerChoosesSquare(board);
  compChooseSquare(board);

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} Won!`);
    break;
  }
  if (boardFull(board)) {
    prompt("It's a tie");
    break;
  }
}


