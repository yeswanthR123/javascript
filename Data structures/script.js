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
  orderDelivery: function ({ starterIndex, mainIndex, time, addr = "Nan" }) {
    console.log(
      `Your order ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${addr} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
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
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(
      `your pizza will be delivered with ${mainIngredient},${otherIngredient}`
    );
  },
};

// //REST pattern and parameters - used for collecting unused parameter and values
// // SPREAD, because used in right side of the value sign
// const arr = [1, 2, ...[1, 2, 34, 4]];
// //REST, because used in left side of the value sign to assign value to the array others
// const [a, b, ...others] = arr;
// console.log(a, b, others);
// const [pizza, , Risotto, ...otherMenus] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ]; // pasta from the main menu was skipped which mean REST  will not take the skiped elements
// console.log(otherMenus);
// //objects

// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

// //Functions

// const add = function (...nums) {
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
//   }
//   console.log(sum);
// };
// add(12, 3, 3, 4, 5, 6);
// add(1, 2);
// add(22, 44, 5, 5, 6);

// let num = [1, 2, 3, 4];
// add(...num);

// restaurant.orderPizza("chicken", "onion", "sprint");
// // object destructuring

// //here we use the property name to destructure the object;
// const { name, categories, openingHours } = restaurant;
// console.log(name, categories, openingHours);

// //destructuring variable name can be changed
// // const { name: Name, catgories: catlog, openingHours: open } = restaurant;
// // console.log(Name, catlog, open);

// // default values
// const { menu: menus = [], mainMenu: mMenu = [] } = restaurant;
// console.log(menus, mMenu); // here the menu is not in object so a empty array is return in menus variable

// // mutating variables
// const simp = { a: 77, b: 44, c: 40 };
// let a = 10;
// let b = 20;
// console.log(a, b);
// // if () is not used below it will act as a block and throws a error "=" unexpected token
// ({ a, b } = simp); // a,b global value are changed to simp objects values
// console.log(a, b);

// // Nested Ojbects
// //here from the openingHours object which is destructure from the restaurant
// // contains nested objects and it is destructured
// const {
//   thu: { open: o, close: c }, // thu is object inside the openingHours and has to properties
// } = openingHours;
// console.log(o, c);

// //Example for destructuring:
// restaurant.orderDelivery({
//   time: "12:20",
//   addr: "periyar street",
//   starterIndex: 1,
//   mainIndex: 0,
// });

// restaurant.orderDelivery({ time: "22:20", starterIndex: 0, mainIndex: 1 });

// //Array destructuring

// const arr = [1, 2, 3, 4];
// let [a, b, c, d] = arr;
// console.log(a, b, c, d);

// //here second value in the array is skiped
// let [first, , third] = restaurant.categories;

// console.log(first, third);

// // to swap to values
// [first, third] = [third, first];
// console.log(first, third);
// // returning two value from function
// const [starter, main] = restaurant.order(1, 2);

// console.log(starter, main);

// // array destructuring in 2d array

// const arr2 = [2, 3, 4, [22, 3, 3]];
// const [x, , , [y, z, i]] = arr2;
// console.log(x, y, z, i);

// // default values
// const [q = 1, w = 1, , , e = 1] = arr2; // the array length is small so the e will not get assigned to any value so it default value will be stored which i 1
// console.log(q, w, e);

//spread operator: "..." to spread a array - it mean underlaying object will now get completely copied only the reference will be copied
// const arr = [1, 2, { fullname: "yami sekuhiro" }, 4];
// const arr2 = [...arr, 5, 6]; // here the arr elements will be filled in arr2

// console.log(...arr);

// //copy of array

// const shallowCopy = [...arr];
// arr[2].fullname = 2;
// console.log(shallowCopy);
// console.log(arr);
// //to join 2 Arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

//spread orperator work on all iterables
//Interables - strings ,arrays, maps, sets, but not objects
//Real-World example
// const ingredient = [
//   prompt("Enter the ingredient -1"),
//   prompt("Enter the ingredient -2"),
//   prompt("Enter the ingredient -3"),
//   "with soup",
// ];
// console.log(ingredient);
// restaurant.orderPasta(...ingredient);

// //object
// //shallow copied the restaurant object
// const newRestaurant = { ...restaurant, foundIn: 1009 };
// // console.log(newRestaurant);
// newRestaurant.name = "Chennai Briyani";
// restaurant.mainMenu[0] = "pizzaaa";
// console.log(newRestaurant.name, restaurant.name);

//Short Ciruiting
//OR || -- stop's at true value
console.log("hello" || "everyone");
console.log(null || undefined); // here both the values are false so the last false value is printed
console.log("" || false || "true" || true || 0); //output "true" because it the first true value in the expression

console.log("-----AND-----");

// AND && -- stop's at the false value
console.log(0 * "9" && true);
console.log(4 && 6 && "he" && 10 && "false");
