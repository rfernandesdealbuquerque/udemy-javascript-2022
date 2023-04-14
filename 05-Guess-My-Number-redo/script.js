let score = 20;
let highestScore = 0;
let number;
let lost = 0;
const messageElement = document.querySelector(".message");
const bodyElement = document.querySelector("body");

generateRandom(number);

function generateRandom() {
  number = Math.trunc(Math.random() * 20 + 1);
}

function verifyGuess() {
  let guess = Number(document.querySelector(".myguess").value);

  if (!guess) {
    messageElement.textContent = "No number 😟";
  } else if (guess != number && !lost) {
    score--;
    document.querySelector(".score").textContent = score;
    lost = score == 0 ? 1 : 0;
    messageElement.textContent =
      guess > number && !lost ? "🛑 Too high" : "🛑 Too low";
    messageElement.textContent = lost
      ? "Lost game"
      : messageElement.textContent;
  } else if (guess == number && !lost) {
    messageElement.textContent = "Correct! ✅";
    document.querySelector(".number").textContent = number;
    if (score > highestScore) {
      highestScore = score;
      document.querySelector(".highest-score").textContent = highestScore;
      bodyElement.style.backgroundColor = "#60b347";
    }
  }
}

function reset() {
  generateRandom();
  score = 20;
  lost = 0;
  highestScore = 0;
  document.querySelector(".score").textContent = score;
  document.querySelector(".myguess").value = "";
  messageElement.textContent = "Guess away...";
  bodyElement.style.backgroundColor = "rgb(48, 44, 44)";
  document.querySelector(".number").textContent = "?";
}

document.querySelector(".btn-guess").addEventListener("click", verifyGuess);
document.querySelector(".btn-again").addEventListener("click", reset);
