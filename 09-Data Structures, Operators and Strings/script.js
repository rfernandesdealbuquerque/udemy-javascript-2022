'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];

  },
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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



//-----------------DESCTRUCTURING ARRAYS-----------------------

//With NO Destructuring
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//With Destructuring
const [x,y,z] = arr; //this is not creating a new array; it's just a destructuring assignment - original array is not affected
console.log(x,y,z);

let [main,, secondary] = restaurant.categories;
console.log(main, secondary);

//Switching variables without using temp but using destructuring

[main, secondary] = [secondary, main];
console.log(main, secondary);


//Receive return values in array from function and immediately create variables for those values
const [starter, mainCourse] = restaurant.order(2,0);

//Destructuring Nested Arrays
const nested = [2,4,[5,6]];
const [i, ,[j,k]] = nested;
console.log(i,j,k);

//Set default values for variables when extracting them - useful when don't know the length of the array returned from an API or something else

const [p=1,q=1,r=1] = [8,9];
console.log(p,q,r);