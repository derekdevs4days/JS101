const readline = require('readline-sync');

let deck = initilizedDeck();

let dealerHand = {
  cards: [],
  sum: 0,
  dealer: 1
};

let playerHand = {
  cards: [],
  sum: 0
};

function prompt(message) {
  console.log(`=> ${message}`);
}

function readCard(obj) {
  let currentHand = "";
  let len = obj.cards.length;
  if (obj.hasOwnProperty('dealer') && len === 2) {
   currentHand += `${obj.cards[0][0]}${obj.cards[0][3]} and unknown card`;
   return currentHand;
  }

  for (let card of obj.cards) {
    currentHand += `${card[0]}${card[3]} `;
  }
  return currentHand;
}

function currentTotal(obj) {
  let arr = obj.cards;
  let sum = arr.reduce((a,c) => a + c[2], 0);

  arr.forEach(card => {
    if (card[0] === 'A' && sum > 21) {
     sum -= 10
    }
  })
  return sum
}

function hit(obj) {
  let len = deck.length;
  console.log(len)
  let randomIdx = Math.floor(Math.random() * len);
  console.log(randomIdx)

  obj.cards.push(deck[randomIdx]);
  deck.splice(randomIdx, 1);
}

function initilizedDeck() {
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

initialDeal();

prompt(`Dealer have: ${readCard(dealerHand)}`);
prompt(`You have: ${readCard(playerHand)}`);

while (true) {
  // console.clear();
  prompt(`Dealer has: ${readCard(dealerHand)}`);
  prompt(`You have: ${readCard(playerHand)}`);

  prompt(`You are at ${currentTotal(playerHand)}. Do you want to (hit) or (stay)?`);
  let hitStay = readline.question();

  while (hitStay !== 'hit' && hitStay !== 'stay') {
    prompt('Do you want to hit or stay?');
    hitStay = readline.question();
  }
  
  if (hitStay === 'stay') break;
  
  hit(playerHand);
}