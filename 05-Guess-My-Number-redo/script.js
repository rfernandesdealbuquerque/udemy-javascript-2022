let score = 20;
let highestScore = 0;
let number;

generateRandom(number);

function generateRandom() {
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = number;
}

function verifyGuess() {
  let guess = document.querySelector(".myguess").value;

  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  } else if (guess < number) {
    document.querySelector(".message").textContent = "Too low!";
    score--;
    document.querySelector(".score").textContent--;
  } else if (guess > number) {
    document.querySelector(".message").textContent = "Too high!";
    score--;
    document.querySelector(".score").textContent--;
  } else if (guess == number) {
    document.querySelector(".message").textContent = "Correct!";
    if (score > highestScore) {
      highestScore = score;
      document.querySelector(".highest-score").textContent = highestScore;
      document.querySelector(".right").style.backgroundColor = "#60b347";
    }
  }
}

function reset() {
  generateRandom();
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".myguess").value = "";
}

document.querySelector(".btn-guess").addEventListener("click", verifyGuess);
document.querySelector(".btn-again").addEventListener("click", reset);
