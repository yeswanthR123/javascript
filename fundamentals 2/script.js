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

// Arrays

