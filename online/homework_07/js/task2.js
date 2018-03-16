var startGame = confirm('Do you want to play a game?');
var attemps = 3;
var startPrize = 10;
var range = 5;
var totalPrize = 0;
var guessed = false;

while (startGame) {
  var prize = startPrize;
  while (attemps > 0) {
    var randNumber = Math.round(Math.random() * range);
    var userNumber = +prompt(
      'Enter a number from 0 to ' + range + '\n' + 
      'Attemps left: ' + attemps + '\n' + 
      'Total prize: ' + totalPrize + '$' + '\n' + 
      'Possible prize on current attempt: ' + prize + '$'
      );
    if (randNumber === userNumber ) {
      switch(attemps) {
        case 3 : 
        totalPrize = prize
        break;
        case 2 :
        totalPrize = prize
        break;
        case 1 : 
        totalPrize = prize
        break;
      }
      guessed = true;
      attemps = 3;
      break;
    } else if (randNumber !== userNumber) { 
      guessed = false;
    }
    prize = Math.floor(prize/2);
    attemps--;
  }
  if (guessed) {
    var isContinue = confirm('You won!!!, Your prize is ' + totalPrize +  '$. Do you want to continue?');
    if (isContinue) {
      startPrize *= 3;
      range *= 2;
      startGame = true;
      attemps = 3;
    } else {
      console.log('Thank you for a game. Your prize is: ' + totalPrize + '$');
      totalPrize = 0;
      startGame = confirm('Do you want to play again?');
    }
  } else if (!guessed) {
    console.log('Thank you for a game. Your prize is: ' + totalPrize + '$');
    totalPrize = 0;
    startPrize = 10;
    range = 5;
    attemps = 3;
    startGame = confirm('Do you want to play again?');
  }
  
} console.log('You did not become a millionaire');