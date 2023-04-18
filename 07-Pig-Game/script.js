const player1Element = document.querySelector(".player-1");
const player2Element = document.querySelector(".player-2");
const score1Element = document.querySelector(".score-1");
const score2Element = document.querySelector(".score-2");
const currentScore1Element = document.querySelector(".current-1");
const currentScore2Element = document.querySelector(".current-2");
let currentScore = 0;
const diceElement = document.querySelector(".dice");
let activePlayer = 1;
player2Element.classList.remove("player-active-2");

const rollDice = function () {
  let randomRoll = Math.trunc(6 * Math.random() + 1);

  diceElement.classList.remove("hidden-dice");
  diceElement.src = `dice-${randomRoll}.png`;

  if (randomRoll !== 1) {
    //add roll to current score of active player
    currentScore += randomRoll;
    document.querySelector(`.current-${activePlayer}`).textContent =
      currentScore;
  } else {
    //switch player and zero current score
    currentScore = 0;
    document.querySelector(`.current-${activePlayer}`).textContent =
      currentScore;
    document
      .querySelector(`.player-${activePlayer}`)
      .classList.remove(`player-active-${activePlayer}`);

    activePlayer = activePlayer === 1 ? 2 : 1;
    document
      .querySelector(`.player-${activePlayer}`)
      .classList.add(`player-active-${activePlayer}`);
  }
};

document.querySelector(".btn-roll-dice").addEventListener("click", rollDice);
