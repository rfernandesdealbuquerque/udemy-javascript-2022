const player1Element = document.querySelector(".player-1");
const player2Element = document.querySelector(".player-2");

const score1Element = document.querySelector(".score-1");
const currentScore1Element = document.querySelector(".current-1");
const currentScore2Element = document.querySelector(".current-2");
let currentScore1 = 0;
const score2Element = document.querySelector(".score-2");
let currentScore2 = 0;
const diceElement = document.querySelector(".dice");
let player1Active = true;

const rollDice = function () {
  let randomRoll = Math.trunc(6 * Math.random() + 1);

  diceElement.classList.remove("hidden-dice");
  diceElement.src = `dice-${randomRoll}.png`;

  if (randomRoll !== 1) {
    //add roll to current score of active player
  } else {
    //switch player and zero current score
  }
};

document.querySelector(".btn-roll-dice").addEventListener("click", rollDice);
