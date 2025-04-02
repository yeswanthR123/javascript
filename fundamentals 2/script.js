//enable strict mode
'use strict';

//Functions - Building block which can be reuse

// function logger(){
//     console.log("yami is the captian of black bulls");
// }

// logger();
// logger();
// logger();


// function mixer(apple,orange){
//     console.log(apple,orange);
//     const juice = `${apple} apples and ${orange} oranges are mixed`;
//     return juice;
// }

// console.log(mixer(9,9)); // outputs : 9 apples and 9 oranges are mixed 
// console.log(mixer()); // outputs : undefined apples and undefined oranges are mixed

//function declaration - can be call before or after the declaration of the function
// function calAge1(birthYear){
//     return 2025 - birthYear;
// }
// let age1 = calAge1(2003);

// //function expression - only call after it is initilized
// let calAge2 = function(birthYear){
//     return 2025 - birthYear;
// }

// let age2 = calAge2(2003);

// console.log(age1,age2);

// Arrow functions - introduced in ES6, it also the function expression

// const calAge3 = (brithYear, name) => name === "yami"?2025 - brithYear:undefined;

// console.log(calAge3(2006,"yami"));

// const calRetirementAge = (brithYear) => {
//     let age = 2035 - brithYear;
//     return 65 - age;
// }

// console.log(calRetirementAge(2003));
// const inputer = () => Number(prompt("enter the number"));
// function adder(){
//     let num1 = inputer();
//     let num2 = inputer();
//     return num1+num2;
// }
// console.log(adder());

// Arrays - it can store element from the different datatypes
// it follow 0 based indexing and it not support negative indexing

// const friends = ["cat","dog","cow"];
// console.log(friends)

// const arr =  new Array(1990,1998,1888);
// console.log(arr[0]) // output 1990
// console.log(friends[friends.length -1]); // outpute : cow
// friends[0] = "bull";
// console.log(friends)

// let firstName = "Yami";
// const details = [firstName, "sukehiro", 2025-2003, friends];
// console.log(details[3])


// Basic Array methods

const things = ['car', 'bike', 'cloths', 'mobile'];
console.log(things);
things.push("mouse"); // push the value to the end of the array and it also return the lenght of the array
console.log(things)

things.unshift("house"); // unshift use to add element at the begining
console.log(things);
console.log(things.pop()); // remove the last element of the array and it return the removed element
console.log(things);
console.log(things.shift()); // remove the first element of the array and it return the removed element
console.log(things);
console.log(things.indexOf('car')); // return the index of the element if it present else it return -1
console.log(things.includes("cloths")) // return true if the element present the array else false
console.log();

