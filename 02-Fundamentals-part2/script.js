"use strict";

console.log("Hello World!");

let name1 = "rodrigo";
console.log(name1);
name1 = "duda";

function printMyNumber(number) {
  return console.log("My number is " + number);
}

let number = 1;
switch (number) {
  case 1:
    printMyNumber(1);
    break;
  case 2:
    printMyNumber(2);
    break;
  case 3:
    printMyNumber(3);
    break;
  case 4:
    printMyNumber(4);
    break;
  default:
    printMyNumber("none");
    break;
}

//TASK: Functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const describeBrazil = describeCountry("Brazil", 200, "Brasilia");
const describeUS = describeCountry("USA", 300, "Washington");
const describeCanada = describeCountry("Canada", 60, "Ottawa");

console.log(describeBrazil);
console.log(describeUS);
console.log(describeCanada);

//TASK: Function Declarations vs Expressions vs Arrows
function percentageOfWorld1(population) {
  const worldPop = 7900;
  const percentage = (population / worldPop) * 100;
  return percentage;
}

const percentageOfWorld2 = function (population) {
  const worldPop = 7900;
  const percentage = (population / worldPop) * 100;
  return percentage;
};

const percentageOfWorld3 = (population) => (population / 7900) * 100;

console.log(percentageOfWorld1("200"));
console.log(percentageOfWorld2(1441));
console.log(percentageOfWorld3(300));

//CODING CHALLENGE #1
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const calcAverage2 = function (score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
};

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No one wins!`);
  }
};

checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));
checkWinner(676, 111);

//CODING CHALLENGE #2
const calcTip = function (bill) {
  const tip = 50 <= bill && bill <= 300 ? 0.15 * bill : 0.2 * bill;
  return tip;
};
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);

//Dot vs. Bracket Notation Lecture
const person = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  job: "teacher",
  friends: ["Michael", "Francis", "Steven"],
};

console.log(person);

person.friends.unshift("Rodrigo");

console.log(
  `${person.firstName} has ${person.friends.length} friends, and his best friend is called ${person.friends[0]} `
);

const func = function () {
  console.log("oioioi");
};
console.log(typeof func);

//Object Methods Lecture
person.hasDriversLicence = true;
person.age = 27;
person.getSummary = function () {
  return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${
    this.hasDriversLicence ? "a" : "no"
  } driver's license`;
};

console.log(person.getSummary());
person.hasDriversLicence = false;
person.firstName = "Rodrigo";
console.log(typeof person["getSummary"]());

//CODING CHALLENGE #3
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const johnIsHigher = john.bmi > mark.bmi;

console.log(
  `${johnIsHigher ? john.fullName : mark.fullName}'s BMI (${
    johnIsHigher ? john.calcBMI() : mark.calcBMI()
  }) is higher than ${johnIsHigher ? mark.fullName : john.fullName}'s (${
    johnIsHigher ? mark.calcBMI() : john.calcBMI()
  })`
);

//CODING CHALLENGE #4
const billsData = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tipsData = [];
const totalsData = [];

for (let i = 0; i < billsData.length; i++) {
  tipsData[i] = calcTip(billsData[i]);
  totalsData[i] = tipsData[i] + billsData[i];
}

console.log(tipsData);
console.log(totalsData);

const calcNumberAverage = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum / array.length;
};

console.log(calcNumberAverage(totalsData));
