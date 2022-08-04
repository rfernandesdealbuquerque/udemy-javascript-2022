//TASK: Values and Variables
const country = "Brazil";
const continent = "South America";
let population = 200000000;

console.log(country);
console.log(continent);
console.log(population);

//TASK: Data Types
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

//TASK: let, conts, var
language = "portuguese";
const myName = "Rodrigo";
//myName = "Digo";
console.log(myName);

//TASK: Basic Operators
const halfPopulation = population / 2;
console.log("Half Population Brazil: " + halfPopulation);

population++;
console.log("Population Brazil: " + population);

let finlandPopulation = 6000000;
isBrazilHigherThanFinland = population > finlandPopulation;
console.log("Is Brazil higher than Finland: " + isBrazilHigherThanFinland);

let avgCountryPopulation = 33000000
isBrazilLessThanAvgCountry = population < avgCountryPopulation;
console.log("Is Brazil less than avg country: " + isBrazilLessThanAvgCountry);

const description = country + " is in " + continent + ", and its " + population + " people speak " + language;
console.log(description);

//CODING CHALLENGE #1

const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

//TASK: String and Template Literals

const descriptionNew = `${country} is in ${continent}, and its ${population} people speak ${language}`

console.log(descriptionNew);

//TASK: If and Else statements

if (population > avgCountryPopulation) {
    console.log(`${country}'s population is above average`)
} else {
    console.log(`${country}'s population is ${avgCountryPopulation - population} below average`)
}

//TASK: Type Conversion and Coercion

console.log('9' - '5'); // number 4
console.log('19' - '13' + '17');// string 617
console.log('19' - '13' + 17); //number 23
console.log('123' < 57); //boolean false
console.log(5 + 6 + '4' + 9 - 4 - 2);//number 1143

//CODING CHALLENGE #3 

const dolphinsScore1 = 96;
const dolphinsScore2 = 108;
const dolphinsScore3 = 89;
const avgDolphinsScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;

const koalasScore1 = 88;
const koalasScore2 = 91;
const koalasScore3 = 110;
const avgKoalasScore = (koalasScore1 + koalasScore2 + koalasScore3) / 3;

const minScore = 100;

console.log(`Dolphins Avg Score: ${avgDolphinsScore}`);
console.log(`Koalas Avg Score: ${avgKoalasScore}`);

if (avgDolphinsScore > avgKoalasScore && avgDolphinsScore >= minScore) {
    console.log("Dolphins win!");
} else if (avgDolphinsScore === avgKoalasScore && avgDolphinsScore >= minScore && avgKoalasScore >= minScore) {
    console.log("Draw!");
} else if (avgKoalasScore > avgDolphinsScore && avgKoalasScore >= minScore) {
    console.log("Koalas win!");
} else {
    console.log("No one wins trophy")
}

//CODING CHALLENGE #4
const bill = 275;
const tip = 50 <= bill <= 300 ? 0.15 * bill : 0.20 * bill;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`);
