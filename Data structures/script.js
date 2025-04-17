"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
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

//Array destructuring

const arr = [1, 2, 3, 4];
let [a, b, c, d] = arr;
console.log(a, b, c, d);

//here second value in the array is skiped
let [first, , third] = restaurant.categories;

console.log(first, third);

// to swap to values
[first, third] = [third, first];
console.log(first, third);
// returning two value from function
const [starter, main] = restaurant.order(1, 2);

console.log(starter, main);

// array destructuring in 2d array

const arr2 = [2, 3, 4, [22, 3, 3]];
const [x, , , [y, z, i]] = arr2;
console.log(x, y, z, i);

// default values
const [q = 1, w = 1, , , e = 1] = arr2; // the array length is small so the e will not get assigned to any value so it default value will be stored which i 1
console.log(q, w, e);
