"use strict";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ time, client = "rodrigo", address }) {
    console.log(time, address, client);
  },
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "via del sole",
  client: "other",
});

const array = ["rodrigo", 0, "eliane"];
array?.[1] ?? console.log("There is element.");

//-------------WORKING WITH STRINGS - PART 1--------

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(airline.length);

console.log(airline.slice(airline.indexOf("Air"), airline.lastIndexOf(" ")));
console.log(airline.slice(-1)); //to get last letter of string

console.log(new String("1"));

//Everytime we receive an input from the user it is important to convert all letters to lower case

//Split and Join
const [firstName, lastName] = "Rodrigo Albuquerque".split(" ");
console.log(["Mr.", firstName, "de", lastName].join(" "));

const capitalizeName = function (name) {
  const words = name.split(" ");
  let newName = "";

  for (const word of words) {
    newName += word[0].toUpperCase() + word.slice(1) + " ";
  }

  return newName;
};

console.log(capitalizeName("jessica ann smith davis harris"));
console.log(capitalizeName("rodrigo fernandes de albuquerque"));

//-------------CODING CHALLENGE #4------------------

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
const buttonElement = document.querySelector("button");
buttonElement.style.height = "30px";
buttonElement.style.width = "60px";
buttonElement.textContent = "Press!";

const convertText = function () {
  const text = document.querySelector("textarea").value;
  const words = text.split("\n");
  console.log(words);
  let newText = "";
  let biggestLength = 0;
  for (const word of words) {
    biggestLength = word.length > biggestLength ? word.length : biggestLength;
  }

  for (const [position, word] of words.entries()) {
    const [firstPart, secondPart] = word.toLowerCase().trim().split("_");
    newText += (firstPart + secondPart.replace(secondPart[0], secondPart[0].toUpperCase())).padEnd(biggestLength, " ") + "✅".repeat(position + 1) + "\n";
  }

  console.log(newText);
};

console.log("delayedDeparture".length);
buttonElement.addEventListener("click", convertText);

const flights = "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

for (const flight of flights.split("+")) {
  const parts = flight.split(";");
  const output = `${parts[0].includes("Delayed") ? "🔴" : ""}${parts[0].replaceAll("_", " ")} from ${parts[1].slice(0, 3).toUpperCase()} to ${parts[2].slice(0, 3).toUpperCase()} (${parts[3].replace(":", "h")})`.padStart(45);
  console.log(output);
}

//-------------CODING CHALLENGE #1------------------

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    ["Neuer", "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski"],
    ["Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl", "Witsel", "Hazard", "Brandt", "Sancho", "Gotze"],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printAvgOdds() {
    let avgOdds = 0;
    for (const odd of Object.values(this.odds)) {
      avgOdds += odd;
    }
    console.log(avgOdds / Object.values(this.odds).length);
  },
};
/*
const players1 = game.players[0];
const players2 = game.players[1];
*/
const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log("Player: ", players[i]);
  }

  console.log("Goals: ", players.length);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

/*
const winTeam1 = game.odds.team1 > game.odds.team2 || game.team1;
const wintTeam2 = game.odds.team1 < game.odds.teams2 || game.team2;
const winTeam = winTeam1 || wintTeam2;
console.log(winTeam);
console.log(winTeam);
*/

team1 < team2 && console.log(`Team 1 wins: ${team1}`);
team1 > team2 && console.log(`Team 2 wins: ${team2}`);

//------------------- CODING CHALLENGE #2-----------

//console.log(...game.scored.entries());
for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal}: ${player}`);
}

game.printAvgOdds();

console.log(...Object.entries(game.odds));
for (const [team, odd] of Object.entries(game.odds)) {
  const teamString = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamString}: ${odd}`);
}

const scorers = {};

for (const player of game.scored) {
  scorers[player] = 0;
}
for (const player of game.scored) {
  Object.keys(scorers).includes(player) && (scorers[player] += 1);
}
console.log(scorers);

const scorersSol = {};
//if property doesn't exit yet, it is undefined, so make it =1, otherwise add 1 to it
for (const player of game.scored) {
  console.log(scorersSol[player]);
  scorersSol[player] ? scorersSol[player]++ : (scorersSol[player] = 1);
}
console.log(scorersSol);

//----------------# CODING CHALLENGE #3-----------------------

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

//console.log(...gameEvents.values());
const eventsSet = new Set([...gameEvents.values()]);
const eventsArray = [...eventsSet];
console.log(eventsArray);

gameEvents.delete(64);
console.log(...gameEvents);

const avgEventInterval = 90 / gameEvents.size;
console.log(`An event happened, on average, every ${avgEventInterval} minutes`);

for (const [min, event] of gameEvents) {
  console.log(`[${min <= 45 ? "FIRST HALF " : "SECOND HALF"}] ${min}: ${event}`);
}
//-----------------DESCTRUCTURING OBJECTS-----------------------

//Use curly braces and variables must have same names as object properties -- useful for dealing w/ result of API call
const { name, openingHours, categories } = restaurant;

//If want variables to have different names from properties
const { name: restName, openingHours: hours, categories: tags } = restaurant;

//Settin default values
const { menu = [0] } = restaurant;

//Mutating Variables (must use parentheses) - everything that starts with {} is interpreted as a code block for Javascript
let h = 111;
let f = 434;
const obj = { h: 23, f: 56, g: 45 };

({ h, f } = obj);

//Nested objects
const {
  fri: { open: op, close: clo },
} = openingHours;
console.log(op, clo);

//-----------------DESCTRUCTURING ARRAYS-----------------------

//With NO Destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//With Destructuring
const [x, y, z] = arr; //this is not creating a new array; it's just a destructuring assignment - original array is not affected
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables without using temp but using destructuring

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Receive return values in array from function and immediately create variables for those values
const [starter, mainCourse] = restaurant.order(2, 0);

//Destructuring Nested Arrays
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Set default values for variables when extracting them - useful when don't know the length of the array returned from an API or something else

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
