"use strict";

const player1Element = document.querySelector(".player-1");
const player2Element = document.querySelector(".player-2");
const score1Element = document.querySelector(".score-1");
const score2Element = document.querySelector(".score-2");
const currentScore1Element = document.querySelector(".current-1");
const currentScore2Element = document.querySelector(".current-2");
const diceElement = document.querySelector(".dice");
player2Element.classList.remove("player-active-2");
//Always good practice to keep track of our values with variables in our code instead of the DOM
let currentScore = 0;
let scores = [0, 0];
let activePlayer = 1;
let playing = true;

console.log(window);

const switchPlayer = function () {
  currentScore = 0;
  document.querySelector(`.current-${activePlayer}`).textContent = currentScore;

  document.querySelector(`.player-${activePlayer}`).classList.remove(`player-active-${activePlayer}`);
  activePlayer = activePlayer === 1 ? 2 : 1;
  document.querySelector(`.player-${activePlayer}`).classList.add(`player-active-${activePlayer}`);
};

const rollDice = function () {
  if (playing) {
    let randomRoll = Math.trunc(6 * Math.random() + 1);

    diceElement.classList.remove("hidden-dice");
    diceElement.src = `dice-${randomRoll}.png`;

    if (randomRoll !== 1) {
      //add roll to current score of active player
      currentScore += randomRoll;
      document.querySelector(`.current-${activePlayer}`).textContent = currentScore;
    } else {
      //switch player and zero current score
      switchPlayer();
    }
  }
};

const holdScore = function () {
  if (playing) {
    scores[activePlayer - 1] += currentScore;
    const activePlayerScoreElement = document.querySelector(`.score-${activePlayer}`);
    activePlayerScoreElement.textContent = scores[activePlayer - 1];

    if (scores[activePlayer - 1] >= 20) {
      playing = false;
      document.querySelector(`.player-${activePlayer}`).classList.add(`player-winner-${activePlayer}`);
      document.querySelector(`.player-${activePlayer}`).classList.remove(`player-active-${activePlayer}`);
      diceElement.classList.add("hidden-dice");
    } else {
      switchPlayer();
    }
  }
};

const resetGame = function () {
  //set current, score to zero
  currentScore = 0;
  scores = [0, 0];
  currentScore1Element.textContent = 0;
  currentScore2Element.textContent = 0;
  score1Element.textContent = 0;
  score2Element.textContent = 0;

  //reset to initial styles

  player1Element.classList.add("player-active-1");
  player2Element.classList.remove("player-active-2");
  player1Element.classList.remove("player-winner-1");
  player2Element.classList.remove("player-winner-2");
  diceElement.classList.add("hidden-dice");
  playing = true;
  activePlayer = 1;
};

document.querySelector(".btn-roll-dice").addEventListener("click", rollDice);
document.querySelector(".btn-hold").addEventListener("click", holdScore);
document.querySelector(".btn-new-game").addEventListener("click", resetGame);
