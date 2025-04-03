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

// const things = ['car', 'bike', 'cloths', 'mobile'];
// console.log(things);
// things.push("mouse"); // push the value to the end of the array and it also return the lenght of the array
// console.log(things)

// things.unshift("house"); // unshift use to add element at the begining
// console.log(things);
// console.log(things.pop()); // remove the last element of the array and it return the removed element
// console.log(things);
// console.log(things.shift()); // remove the first element of the array and it return the removed element
// console.log(things);
// console.log(things.indexOf('car')); // return the index of the element if it present else it return -1
// console.log(things.includes("cloths")) // return true if the element present the array else false
// console.log();

// OBJECTS - {} is used to define objects

// const yami = {
//     firstName:"Yami",
//     secondName:"sukehiro",
//     status:"captain",
//     guildName:"black bulls",
//     level:90,
//     kills:40,
//     power:function(){
//         if(this.kills<20){
//             return "super";
//         }else if(this.kills<40){
//             return "super human";
//         }else if(this.kills<60){
//             return "god";
//         }else{
//             return "devil"
//         }
//     },
//     calcAge:function(){
//         this.age = 2025 - 2003; // this keyword is use to represent the current object property
//     }
// };
// console.log(yami.power());
// yami.kills+=80;
// console.log(yami.power());
// // object can be access by . operator and bracket notation 
// // difference is in bracket notation we can use expression
// console.log(yami.kills)
// console.log(yami['kills'])
// // const input = prompt("what do you want to know about the yami");
// //alert(yami.input); //  output : undefined because yami doesn't have the input property
// // alert(yami[input]);

// // to add new property to the object 

// yami.friends = "asta";
// yami['skill'] = 'black magic';
// console.log(yami);

// console.log(yami["power"]());


// Loops - for,while,etc

// for(let i = 10;i>0;i--){ // for loop takes three things (counter, condition, action) 
//     console.log("count down",i);
// }

// const things = ['car', 'bike', 'cloths', 'mobile'];

// for(let i = 0;i<things.length;i++){
//     console.log(things[i]);
// }

// const birthYear = [1989,1999,2004,2003,2008,2006];
// const age = [];
// for(let i = 0;i<birthYear.length;i++){
//     //age[i] = 2025 - birthYear[i];
//     age.push(2025-birthYear[i]);
// }
// console.log(birthYear);
// console.log(age);

// // we can also use "break" and "continue" to control the looping

// // loop inside loop

// for(let i = 0;i<3;i++){

//     for(let j = 0;j<age.length;j++){
//         console.log(age[j]);
//     }
// }

// WHILE LOOP

// let i = 10;
// while(i>0){
//     console.log(i);
//     i--;
// }

// let dice = Math.trunc(Math.random()*6)+1;
// console.log(dice);
// while(dice !== 6){
//     console.log("roll :",dice);
//     dice = Math.trunc(Math.random()*6)+1;
// }