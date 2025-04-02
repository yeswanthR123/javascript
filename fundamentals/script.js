// //javascript is a object-oriented , multi-paradigm programming language
// //From ES6 to later version are called modern web
// // To link the javascript file to html use <script src = ""> tag

// // values and variables

// /*let firstName = "yami"; // declaration of variable 

// // variable is like a box to hold the value

// console.log(firstName);
// console.log(firstName);

// //variable can only start with letters,underscores,doller symbol
// let $top = "Black Bull";

// console.log(firstName,"captain of",$top);*/

// // Naming convensions
// // constant are in UPPER case
// // variable start with lowercase
// // variables names should be more descriptive



// // Datatypes
// // value can be:
// //  1.primitive
// //  2.objects

// // 7 primitive data types
// // Numbers,string,boolean,undefined,null,BigInt,symbol

// /*let age = 21;
// console.log(age);
// //typeof operator is used to find the datatype of the variable
// console.log(typeof age);
// console.log(typeof "hello");
// console.log(typeof 33.3);
// console.log(typeof true);
// console.log(typeof null);*/ // it should return null, but it return object which is error


// //let = variable which can the changed later or it is mutable
// //var = old version of the let to declare variable
// // const = vairable cannot be change after it is assigned or it is immutable

// // const dateOfBirth = 2003;
// //const name; // const variable must be initialized

// // var firstVariable = "legacy";

// // lastName = "Ragu"; // we can declare variable like this also, but it is not recommanded

// const firstName = "Yami";
// const age = 30;

// console.log(firstName,"age",age**2); // ** to perform exponent of a number 
// const lastName = "sukehiro";
// console.log(firstName+" "+lastName);
// let teamSize = 10;
// console.log(firstName,lastName,"team size is",teamSize);
// teamSize+=1;
// console.log(teamSize);
// teamSize--;
// console.log(teamSize);
// teamSize++;

// //comparison operators: <,>,<=,>=


//operator precedence;
/* 
1.()
2.++,--
3.**
4.*,/
5.+,-
*/

// console.log(2**1**3); // here the execution start from the right to left so, 2^(1^3)
// console.log(2+4+4-2);// right to left because +,- has the same level of precedence
// console.log(2*4+3+2+2);// * has the higher precedence then the +,- so it will be executed first follow by addition and subtraction

//string-template literals

// const fullName = "Yami Sukehiro";

// const yami = "I'm " + fullName +" captain of Black Bulls";
// console.log(yami);

// // to use template literals use   `` backtick
// const newYami = `I'm ${fullName} captain of Black Bulls`;
// console.log(newYami);   
// console.log(`we can use backtick to write normal para also,
// multiline para`);

//if-else 

// let age = 18;
// if(age >= 18){
//     console.log("You are eligible for the voting");

// }else{
//     console.log("You are not eligible for the voting");
// }

//Type conversion and coercion 

// const birthYear = '2003';
// console.log(birthYear+10); // output : 200310;
// console.log(Number(birthYear)+10); // output : 2013
// console.log(Number("hello")); // output : NaN
// console.log(typeof NaN); // output : number

// // to covert the string to number use Number()
// // to convert the Number to string use String()

// const luckyNo = 77;
// console.log(String(luckyNo)+birthYear);

// //javascript do type coercion automatically

// console.log("I'm "+ 21 + " old"); // here javascript automatically convert the Number 23 to string And only the "+" operator will convert number to the string
// console.log("21"/'21'); // output : 1 because any arithematic operation except addition performed string -> number
// console.log(21+true); // here the boolean true is convert to the number with the value of 1 so 21 +1 = 22 as output

// console.log('21'+6-90+"1");



// // falsy values : 0, '', NaN, Undefined, null
// if('' || 0){
//     console.log("One or more condition is true");
// }else{
//     console.log("All condition are false");
// }


// equality operator == or === and !== or !=

// 18 === 18 output : true , it not allow type conversion
// 18 == '18' output : true , allow type conversion


//WE can get the input from the user by prompt 

// let currDate = prompt("Enter the current date");
// console.log(currDate);

//logical operators : ||, &&, !

// if(true  || true){
//     console.log("true");
// }else{
//     console.log("false");
// }

