const greet = (greeting) => (greeter) => console.log(`${greeting} ${greeter}`);

greet("Oi")("Rodrigo");

//----------CODING CHALLENGE #1------------------

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer(type) {
    let promptString = `${this.question}\n${this.options.join("\n")}\n(Write option number)`;
    const inputAnswer = Number(prompt(promptString));
    if (inputAnswer === 0 || inputAnswer === 1 || inputAnswer === 2 || inputAnswer === 3) {
      this.answers[inputAnswer]++;
    } else {
      alert("Invalid answer");
    }
    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

document.querySelector("button").addEventListener("click", poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [1, 2, 3, 4] }, "string");
