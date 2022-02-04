'use strict';

/*
// Selecting and Manipulating Elements
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23; // .guess is an input, use value
console.log(document.querySelector('.guess').value);
*/

// functions
const newSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const resetScore = () => (score = 20);

const emptyGuess = () => (document.querySelector('.guess').value = '');

const setTextContentByClass = function (selectClass, message) {
  document.querySelector(selectClass).textContent = message;
};

const setBodyColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const setNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

// Inital Setting
let secretNumber = newSecretNumber();
let score = 20;
let highScore = 0;

// Check Button Function
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    setTextContentByClass('.message', '⛔ No Number!');

    // when player wins
  } else if (guess === secretNumber) {
    setTextContentByClass('.message', '🎉 Correct Number!');
    setTextContentByClass('.number', secretNumber);

    setBodyColor('#60b347');

    setNumberWidth('30rem');

    document.querySelector('.check').disabled = true;
    document.querySelector('.guess').disabled = true;

    // update high score
    if (score > highScore) {
      highScore = score;
      setTextContentByClass('.highscore', highScore);
    }

    // when guess is wrong
  } else {
    // when player doesn't lose
    if (score > 1) {
      setTextContentByClass(
        '.message',
        guess > secretNumber ? '📈 Too High!' : '📉 Too Low!'
      );
      score--;
      setTextContentByClass('.score', score);
    } else {
      // when player loses
      setTextContentByClass('.message', '💥 You lost the game :(');
      setTextContentByClass('.score', 0);
    }
  }
});

// Code Challenge #1
// play again button function

// type of event('click'), what to do(the following function)
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = newSecretNumber();
  console.log(secretNumber);
  resetScore();
  emptyGuess();
  setTextContentByClass('.number', '?');
  setTextContentByClass('.score', score);
  setTextContentByClass('.message', 'Start guessing...');

  setBodyColor('#222');
  setNumberWidth('15rem');

  document.querySelector('.check').disabled = false;
  document.querySelector('.guess').disabled = false;
});
