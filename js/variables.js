///////////////////////////////////////////////////////////////// Variable /////////////////////////////////////////////////////

// A variable is a "named storage" for data. We can use variable to store goodies, visitors and othre data.
// 1 - To create a variable in JavaScript, use the let keyword.

/* 

let hi; // Variable declaration     // message is identiifier

hi = "some data";

console.log(hi);

 

JavaScript has three kinds of variable declarations.

1 - var    // global scope
2 - let    // Block scope, local variable
3 - const  // Block scope



// declare multiline variables in one line


let name = "Anuj",
  age = 30,
  message_1 = "Hey";

// declare multiline variables in multiline

let name = "kumar",
  age = 29,
  message = "hi";

let user = "Kumar";
let age_1 = 29;
let message_2 = "Bye";


let message; // declaration
message = "Hello!";
message = "World!"; // value changed

console.log(message);


let hello = "Hello World!";
let message;

message = hello; // copy 'Hello World!' from hello into message

// now two variables hold the same data
console.log(hello);
console.log(message);


 // -- --  Variable Naming  : 

 1 - The name must contain only letters, digits, or the symbols $ and _.
 2 - The first character must not be a digit.


let userName;

let test123;

let $ = 1;
let _ = 2;
console.log($ + _);


let 1a; // can't start with a digit
let my-name; // hyphens  '-' aren't allowed on same


const PI = 3.14;

PI = 3.1415; //  can't reassign the constant

console.log(PI);

 

// -- uppercase constants

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

//... When we need to pick a color
let color = COLOR_ORANGE;
console.log(color);


let admin;
let name;
name = "John";

admin = name;
console.log(admin);
// console.log(name);



// -- i - Global Scope Example

var number = 50; // global scope

function print() {
  var square = number * number;
  console.log(square);
}
console.log(number); // 50

print(); // 2500



// -- ii - Local Scope Example

function print() {
  var number = 50;
  var square = number * number;
  console.log(square);
}

print(); // 2500

console.log(number); // ReferenceError: number is not defined


// redeclared

var number = 50;
console.log(number); // 50

var number = 100;
console.log(number); // 100


// reassignment

var number = 50;
console.log(number); // 50

number = 100;
console.log(number); // 100

number = 200;
console.log(number); // 200


////  How to hoist variables declared with var  ////

// 1 -- global scope

console.log(number); // udefined

var number = 50;

console.log(number); // 50

// 2 -- local scope

function print() {
  var square_1 = number * number;
  console.log(square_1); // NaN

  var number = 5;

  var square_2 = number * number;
  console.log(square_2); // 25
}

print();



////// How to Declare Variables with let //////

// 1 - let can have blobal, local, or block scope

let number = 10; //  global scope variable

function print() {
  let square = number * number;

  if (number < 16) {
    var largerNumber = 22; // local scope
    let anotherLargerNumber = 25; // block scope variable

    console.log(square); // 100
  }
  console.log(largerNumber); // 22
  console.log(anotherLargerNumber); // ReferenceError: anotherLargerNumber is not defined
}

print();



// // How to redeclare and reassign variables declared with let // //

// 1 -- reassignment

let number = 10;
console.log(number); // 10

number = 15;
console.log(number); // 15



// 2 -- redeclaration

let number = 10;

let number = 30; // SyntaxError: redeclaration of let number



////  How to hoist variables declared with let  ////

console.log(number); // ReferenceError: can't access lexical declaration 'number' before initialization

let number = 34;



function print() {
  let square = number * number;

  let number = 22;
}

print(); // ReferenceError: can't access lexical declaration 'number' before initialization



////// How to Declare Variables with let //////

const number = 10;

function print() {
  const square = number * number;

  if (number < 18) {
    var largerNumber = 25;
    const anotherLargerNumber = 40;

    console.log(square); // 100
  }
  console.log(largerNumber); // 25
  console.log(anotherLargerNumber); // ReferenceError: anotherLargerNumber is not defined
}

print();




// // How to redeclare and reassign variables declared with const // //


// 1 -- redeclaration

const number = 22;

const number = 12; // SyntaxError: redeclaration of const number



// 1 -- reassignment

const number = 50;

number = 100; // TypeError: invalid assignment to const 'number'


////  How to hoist variables declared with const  ////

console.log(number); //  ReferenceError: can't access lexical declaration 'number' before initialization

const number = 10;


*/
