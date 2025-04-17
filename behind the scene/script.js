"use strict";
// const name = "yeshwanth";
// const age = 21;
// const clg = "SEC";
// function one() {
//   let num1 = 89;

//   function two() {
//     let num2 = 90;
//     let name = "yami";
//     three();

//     function three() {
//       console.log("Inside the thrid function");
//       console.log(`${name} age is ${age} studyed in ${clg}`);
//     }
//   }
//   two();
// }
// one();

// console.log(g);
// g cannot be access because it is in the temporal Dead zone (TDZ) and it will be output a error that it need to initialized before;
// const g = 0;

// hoist();
// console.log(firstName);
// function hoisting() {
//   console.log("in the hoisting function");
// }

// var hoist = function () {
//   hoisting();
// };
// var firstName = "yami";
// const hoist1 = () => hoist();
// hoist();

// var x = 10; // it will create a property in the global window object which can be accessed by window."variable_name"
// let y = 19;

// document.querySelector(".title").addEventListener("mouseover", function () {
//   this.textContent = "hello there!!";
// });
// document.querySelector(".title").addEventListener("mouseout", function () {
//   this.textContent = "Bye bye ;)";
// });

// this -> to refer the current object
// In functions this refer to undefine
// In arrow functions this refer to parent object
// In method this refer to the current object

// const obj = {
//   firstName: "yami",
//   lastName: "sekuhiro",
//   age: 30,
//   fun1: function () {
//     console.log(this);

//     function fun2() {
//       console.log(this); // this will be output as undefined because for the normal function the this is undefined
//     }
//     const fun3 = () => {
//       console.log(this); // here the arrow function is use this will use the parent object for the "this" so the perent object is obj for this function
//       const fun4 = () => {
//         console.log(this);
//       };
//       fun4();
//     };

//     fun2();
//     fun3();
//   },
// };

// obj.fun1();

// arguments keyword - can be used in the normal functions

// function avg3(a, b, c) {
//   console.log(arguments);
//   return (a + b + c) / 3;
// }

// avg3(1, 2, 1, 1);

// object copy

const obj1 = {
  Name: "yami",
  age: 33,
  clan: "Black Bulls",
  ability: ["dimensional slash", "black magic"],
};
//shallow copy - obj1.ability will not be copied only the reference will be copied
// const obj2 = { ...obj1 };
// obj2.Name = "Asta";
// obj2.ability[1] = "wind magic";
// console.log(obj1);
// console.log(obj2);

//deep copy - complete copy of the object with all the objects
const obj2 = structuredClone(obj1);
obj2.Name = "Asta";
obj2.ability[1] = "wind magic";
console.log(obj1);
console.log(obj2);
