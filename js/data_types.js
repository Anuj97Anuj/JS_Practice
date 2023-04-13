//////////////////////////////////////////// Data Types ////////////////////////////////////////////

/* A value in JavaScript is always of a certain types. For example, a string or a Number. */

/*

 1 -- Primitive Data Type:

1 - Number
2 - String
3 - Boolean
4 - Undefined
5 - Null
6 - Bigint
7 - Symbol
8 - Object

2 -- Object Datatype:

1 - An object
2 - An array
3 - An date
*/

/* 

let length = 16;
let width = 7.5;

console.log(`Lenght : ${length} and Width: ${width}`);



255;
255.0;

console.log(255 === 255.0); // true
console.log(255 === 0xff); // true

console.log(255 === 0b11111111); // true
console.log(255 === 0.255e3); // true


let n = 123;
n = 12.345;

console.log(n); // 12.345


console.log(n / 0); // Infinity

console.log(Infinity); // Infinity

console.log(1e500);  // Infinity


console.log(Number("123")); // 123

console.log(Number("123") === 123); //true



console.log(NaN + 1); // NaN

console.log(NaN * 41); // NaN

console.log("not a number " / 2 - 1); // NaN

console.log(NaN ** 0); // 1

console.log("not a number" / 2); // NaN

console.log(Number("unicorn")); // NaN

console.log(Number(undefined)); // NaN




let billion = 1000000000;

let billion = 1_000_000_000;
console.log(billion); // 1000000000

let billion = 1e9;
let billion_1 = 7.3e9;

console.log(billion); // 1000000000
console.log(billion_1); // 7300000000


let mcs = 0.000001;
let mcs_1 = 1e-6;
console.log(mcs); // 0.000001
console.log(mcs_1); // 0.000001


// -3 divides by 1 with 3 zeros

console.log(1e-3 === 1 / 1000);  // true


let num = 255;

console.log(num.toString(16)); // ff
console.log(num.toString(2)); // 11111111

console.log((12345).toString(36)); // 9ix

*/

/*
// // Rounding // //



*/

/* 
// // // Dynamic and weak typing // // //
let foo = 42; // now number
foo = "bar"; // now string
foo = true; // now boolean

console.log(foo); // true


const foo = 42;

const result = foo + "1";

console.log(result); // 421

*/

/*

// // /// Difference b/w null and undefined // // ///

console.log(typeof null); // object

console.log(typeof undefined); // undefined

console.log(null === undefined); // false

console.log(null == undefined); //true

console.log(null === null); // true

console.log(null == null); // true

console.log(!null); // true

console.log(Number.isNaN(1 + null)); // false

console.log(Number.isNaN(1 + undefined)); // true

console.log(null + 1); // 1

console.log(1 + undefined); // NaN

console.log(undefined === undefined); //true

console.log(undefined == undefined); //true



function test(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}
console.log(test("1")); // 1
console.log(test("NotANumber")); // NaN



console.log(NaN === NaN); // false
console.log(NaN == NaN); // false

console.log(Number.NaN === NaN); // false

console.log(Number.NaN == NaN); // false

console.log(isNaN(NaN)); // true

console.log(isNaN(Number.NaN)); // true

console.log(Number.isNaN(NaN)); // true


function valueIsNaN(v) {
  return v !== v;
}

console.log(valueIsNaN(1)); // false
console.log(valueIsNaN(NaN)); // true
console.log(valueIsNaN(Number.NaN)); // true



console.log(-5 / 0); // -Infinity

let num1 = 12781274812758749120407407074n;

console.log(num1);

*/

/* 

const abbr = {
  firstName: "Anuj",
  lastName: "Kumar",
  job: "Software Engineer",
  location: "Remote",
};

console.log(abbr);

console.log(typeof abbr); // object

*/

/*  
/// /// ////  Symbol /// /// ///

const syml = Symbol();

console.log(syml); // Symbol()

const sym2 = Symbol("foo");

console.log(sym2); // Symbol(foo)

const sym3 = Symbol("foo");

console.log(sym3); // // Symbol(foo)

 

let syml = Symbol("foo") === Symbol("foo");

console.log(syml); // false

// Symbol wrapper object //

const sym = Symbol("foo");

console.log(typeof sym); // symbol

const symll = Object(sym);

console.log(typeof symll); // object


let synm = Symbol.keyFor(Symbol.for("tokenString")) === "tokenString";

console.log(synm); // true

*/


/*

//////////////// typeof operator ////////////////

console.log(typeof undefined); // UNDEFINED

console.log(typeof 0); // number

console.log(typeof 10n); // bigint

console.log(typeof true); // boolean

console.log(typeof "foo"); // string

console.log(typeof Symbol("id")); // symbol

console.log(typeof Math); // object

console.log(typeof null); // object

console.log(typeof NaN); // number

console.log(typeof alert); // function

console.log(typeof window); // object

console.log(typeof Object); // function

console.log(typeof Array); // function

console.log(typeof Date); // function

console.log(typeof Map); // function

console.log(typeof BigInt); // function

console.log(typeof Symbol); // function

console.log(typeof String); // function

console.log(typeof Number); // function

console.log(typeof Boolean); // function

*/

console.log(typeof typeof); 

