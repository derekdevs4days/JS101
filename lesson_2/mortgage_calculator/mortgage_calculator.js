// Welcome the client
// Get loan amount
// Get APR
// Get loan duration

// Calc monthly interest rate
// Calc loan duration in months

const MESSAGES = require('./mort_calc_messages.json');

const RLSYNC = require('readline-sync');

function prompt(message) {
  console.log(`=>  ${message}`);
}

function checkValid(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}

prompt(MESSAGES['welcome']);

while (true) {

  prompt(MESSAGES['homePrize']);
  let homePrize = RLSYNC.question();
  while (checkValid(homePrize)) {
    prompt(MESSAGES['invalHomePrize']);
    homePrize = RLSYNC.question();
  }

  prompt(MESSAGES['downpayment']);
  let downpayment = RLSYNC.question();
  while (checkValid(downpayment)) {
    prompt(MESSAGES['invalidDown']);
    downpayment = RLSYNC.question();
  }

  prompt(MESSAGES['apr']);
  let apr = RLSYNC.question();
  while (checkValid(apr)) {
    prompt(MESSAGES['invalidAPR']);
    apr = RLSYNC.question();
  }

  prompt(MESSAGES['loanLength']);
  let loanDuration = RLSYNC.question();
  while (checkValid(loanDuration)) {
    prompt(MESSAGES['invalidDuration']);
    loanDuration = RLSYNC.question();
  }

  let loanAmount = Number(homePrize) - Number(downpayment);

  let montlyInterest = (Number(apr) / 100) / 12;

  let monthDuration = Number(loanDuration) * 12;

  let monthlyPayment = loanAmount *
                      (montlyInterest /
                      (1 - Math.pow((1 + montlyInterest), (-monthDuration))));

  let result = `Your loan amount is $${loanAmount.toFixed(2)}\n
    Your monthly mortgage payment is $${monthlyPayment.toFixed(2)}\n
    Your loan will be ${monthDuration} months long.\n
    You will pay a total of $${(monthlyPayment * monthDuration).toFixed(2)}\n`;

  prompt(result);

  prompt(MESSAGES['again']);
  let answer = RLSYNC.question();

  if (answer.toLowerCase() !== 'y') {
    prompt(MESSAGES['bye']);
    break;
  }
}