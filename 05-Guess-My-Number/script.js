'use strict';

let number;
let score;
let isCorrect = false;
let highscore = 0;

generateSecretNumber();

function generateSecretNumber() {
  number = Math.trunc(Math.random() * 20 + 1);
  console.log(number);
}

function startScore(startScore) {
  document.querySelector('.score').textContent = String(startScore);
  score = startScore;
}
startScore(20);

function decreaseScore() {
  document.querySelector('.score').textContent -= 1;
  score--;
}

function checkScoreIsZero() {
  if (score <= 0) {
    document.querySelector('.message-start-guessing').textContent =
      '👎 You lost the game';
    document.querySelector('.score').textContent = '0';
  }
}

function resetMessage() {
  document.querySelector('.message-start-guessing').textContent =
    'Start guessing';
}

function updateHighscore() {
  if (score > highscore) {
    document.querySelector('.highscore').textContent = score;
    highscore = score;
  }
}

const checkGuess = function () {
  const guess = Number(document.querySelector('.guess').value);

  if (isNaN(guess) && !isCorrect) {
    document.querySelector('.message-start-guessing').textContent =
      '❗ Not a number!';
  } else if (!guess && !isCorrect) {
    document.querySelector('.message-start-guessing').textContent =
      '🛑 Empty number!';
  } else if (guess > 20 && !isCorrect) {
    document.querySelector('.message-start-guessing').textContent =
      '🔺 Higher than 20!';
  } else if (guess === number) {
    document.querySelector('.message-start-guessing').textContent =
      '✅ Correct number!';
    isCorrect = true;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = guess;
    document.querySelector('.number').style.width = '15rem';
    updateHighscore();
  } else if (guess !== number && !isCorrect) {
    document.querySelector('.message-start-guessing').textContent =
      guess > number ? '❌ Too high!' : '❌ Too low!';
    decreaseScore();
    checkScoreIsZero();
  }
};

const resetGame = function () {
  startScore(20);
  generateSecretNumber();
  resetMessage();
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '10rem';
  document.querySelector('.guess').value = '';
  isCorrect = false;
};

document.querySelector('.btn-check').addEventListener('click', checkGuess);

document.querySelector('.btn-again').addEventListener('click', resetGame);
