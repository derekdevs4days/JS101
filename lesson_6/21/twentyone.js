const readline = require('readline-sync');
const DEALER_MIN = 17;
const MAX_VALUE = 21;

let currentRound = 1;
let playerScore = 0;
let dealerScore = 0;


let deck = initilizeDeck();


let dealerHand = {
  cards: [],
  sum: 0,
  dealer: 1
};

let playerHand = {
  cards: [],
  sum: 0,
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function initilizeDeck() {
  let deck = [
    ['2', 'S', 2, '♠'], ['2', 'C', 2, '♣'], ['2', 'D', 2, '♦'], ['2', 'H', 2, '♥'],
    ['3', 'S', 3, '♠'], ['3', 'C', 3, '♣'], ['3', 'D', 3, '♦'], ['3', 'H', 3, '♥'],
    ['4', 'S', 4, '♠'], ['4', 'C', 4, '♣'], ['4', 'D', 4, '♦'], ['4', 'H', 4, '♥'],
    ['5', 'S', 5, '♠'], ['5', 'C', 5, '♣'], ['5', 'D', 5, '♦'], ['5', 'H', 5, '♥'],
    ['6', 'S', 6, '♠'], ['6', 'C', 6, '♣'], ['6', 'D', 6, '♦'], ['6', 'H', 6, '♥'],
    ['7', 'S', 7, '♠'], ['7', 'C', 7, '♣'], ['7', 'D', 7, '♦'], ['7', 'H', 7, '♥'],
    ['8', 'S', 8, '♠'], ['8', 'C', 8, '♣'], ['8', 'D', 8, '♦'], ['8', 'H', 8, '♥'],
    ['9', 'S', 9, '♠'], ['9', 'C', 9, '♣'], ['9', 'D', 9, '♦'], ['9', 'H', 9, '♥'],
    ['10', 'S', 10, '♠'], ['10', 'C', 10, '♣'], ['10', 'D', 10, '♦'], ['10', 'H', 10, '♥'],
    ['J', 'S', 10, '♠'], ['J', 'C',10, '♣'], ['J', 'D', 10, '♦'], ['J', 'H', 10, '♥'],
    ['Q', 'S', 10, '♠'], ['Q', 'C', 10, '♣'], ['Q', 'D', 10, '♦'], ['Q', 'H', 10, '♥'],
    ['K', 'S', 10, '♠'], ['K', 'C', 10, '♣'], ['K', 'D', 10, '♦'], ['K', 'H', 10, '♥'],
    ['A', 'S', 11, '♠'], ['A', 'C', 11, '♣'], ['A', 'D', 11, '♦'], ['A', 'H', 11, '♥']
  ];
  return deck;
}

function initialDeal() {
  let counter = 4;

  while (counter > 0) {
    let len = deck.length;
    let randomIdx = Math.floor(Math.random() * len);

    if (counter % 2 === 0) {
      dealerHand.cards.push(deck[randomIdx]);
    } else {
      playerHand.cards.push(deck[randomIdx]);
    }
    deck.splice(randomIdx, 1);
    counter--;
  }
}

function showDealersHand(obj) {
  let currentHand = `${obj.cards[0][0]}${obj.cards[0][3]} and unknown card`;
  return currentHand;
}

function readCard(obj) {
  let currentHand = "";
  for (let card of obj.cards) {
    currentHand += `${card[0]}${card[3]} `;
  }
  return currentHand;
}

function currentTotal(obj) {
  let arr = obj.cards;
  let sum = arr.reduce((a,current) => a + current[2], 0);

  arr.forEach(card => {
    if (card[0] === 'A' && sum > 21) {
      sum -= 10;
    }
  });
  return sum;
}

function hit(obj) {
  let len = deck.length;
  let randomIdx = Math.floor(Math.random() * len);

  obj.cards.push(deck[randomIdx]);
  deck.splice(randomIdx, 1);
}


function determineWinner(num1, num2) {
  let hands = `You have ${num1} and dealer has ${num2}.`;
  let message;

  if (num1 > MAX_VALUE) {
    dealerScore++;
    message = `Bust! You lose this hand. You are at ${currentTotal(playerHand)}.`;
    return message;
  }

  if (num2 > MAX_VALUE) {
    playerScore++;
    message = 'You win this hand! Dealer bust.';
    return message;
  }

  if (num1 > num2) {
    playerScore++;
    message = `You win this hand! ${hands}`;
    return message;
  } else if (num1 < num2) {
    dealerScore++;
    message = `You Lose this hand. ${hands}`;
    return message;
  } else {
    message = `This hand is a tie. ${hands}`;
    return message;
  }
}

function fakeShuffle() {
  const start = Date.now();
  let now = Date.now();
  prompt('');
  prompt(`Shuffling... Next hand starts in 10 seconds.`);
  while (now - start < 10000) {
    now = Date.now();
  }
}

//play again loop
while (true) {
  currentRound = 1;
  playerScore = 0;
  dealerScore = 0;
  //main loop
  while (true) {
    deck = initilizeDeck();
    dealerHand = {
      cards: [],
      sum: 0,
      dealer: 1
    };
    playerHand = {
      cards: [],
      sum: 0,
    };
    initialDeal();

    //player loop
    while (true) {
      console.clear();
      prompt(`This is round ${currentRound}`);
      prompt(`You have ${playerScore} points. Dealer has ${dealerScore} points.\n`);
      prompt(`Dealer's Hand: ${showDealersHand(dealerHand)}`);
      prompt(`Your Hand: ${readCard(playerHand)}`);

      if (currentTotal(playerHand) > 21) {
        break;
      }

      prompt(`You are at ${currentTotal(playerHand)}. Do you want to (hit) or (stay)?`);
      let hitStay = readline.question();

      while (hitStay !== 'hit' && hitStay !== 'stay') {
        prompt('Do you want to hit or stay?');
        hitStay = readline.question();
      }


      if (hitStay === 'stay') {
        prompt('You choose to stay.');
        break;
      }

      hit(playerHand);
    }
    //dealer loop
    while (true) {
      if (currentTotal(playerHand) > MAX_VALUE || currentTotal(dealerHand) >= DEALER_MIN ) break;
      hit(dealerHand);
    }
    currentRound += 1;
    let message = determineWinner(currentTotal(playerHand), currentTotal(dealerHand));
    console.clear();
    prompt(`This is round ${currentRound}`);
    prompt(`Player Score: ${playerScore}. Dealer Score: ${dealerScore}.\n`);
    prompt(`Dealer Hands: ${readCard(dealerHand)}`);
    prompt(`Your Hand: ${readCard(playerHand)}`);
    prompt(message);

    if (playerScore >= 3) {
      prompt (`You win this game!`);
      break;
    }

    if (dealerScore >= 3) {
      prompt (`You lost the game.`);
      break;
    }

    if (currentRound > 5) {
      prompt(`This game is a tie.`);
      break;
    }
    fakeShuffle();
  }

  prompt(`Do you want to play another round? (y / n)?`);
  let playAgain = readline.question().toLowerCase();
  while (playAgain !== 'y' && playAgain !== 'n') {
    prompt(`Please enter (y) or (n)`);
    playAgain = readline.question().toLowerCase();
  }
  if (playAgain === 'n') break;
}

/*
TODO
Implement time dealay
*/