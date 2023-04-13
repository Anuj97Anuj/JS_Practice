/*
Template literals are literals delimited with backtick (``) characters, allowing for multi-line SVGStringList, string interpolation with embedded expressions, and special constructs called tagged templates.

Template literals are sometimes informally called template strings, because they are used most commonly for string interpolation.
*/

/*
`string text`
`string text line 1`
`string text line 2`
`string text ${expression} string text`;
tagFunction`string text ${expression} string text`;

*/

/*

///////////// Multi-line strings  /////////////

console.log(`string line 1
string text line 2`);

///////////// String interpolation  /////////////

// 1 - Without template literals

const a = 5;
const b = 10;

console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + " . ");



// 2 - With template literals

const a = 5;
const b = 10;

console.log(`Fifteen is ${a + b} and
not ${2 * a + b}`);



///////////// Nesting templates /////////////

const classes = `header ${
  isLargeScreen()
    ? " "
    : `icon-${item - isCollapsed ? "expander" : "collapser"}`
}`;



let color = "red";
let count = 3;
let apples = color ? `${count} ${color}` : color;
let message = `I have ${apples} apples`;

console.log(message);


///////////// Tagged template literals /////////////

let name = "Bryan";
let occupation = "Farmer";

let sentence = `Hi I'm ${name} and I'm busy at ${occupation}`;

console.log(sentence);  

//// with tag function ////



let fun = (strings, ...values) => {
  return `I render everything fun`;
};

let name = "Bryan";
let occupation = "Farmer";

let sentence = fun`Hi! I'm ${name} and I'm busy at ${occupation}`;

console.log(sentence); //  I render everything fun

*/
