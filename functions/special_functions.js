/*
SPECIAL FUNCTIONS
They include:
    1. arrow function
    2. spread operator
    3. rest operator
*/

// function definition
function doingStuff(x){
    console.log(x);
}

// function call
doingStuff("Great!");


// arrow function version,here "x" is the parameter
let doingArrowStuff = x => console.log(x);
doingArrowStuff("Yeah");

// arrow function with two parameters x, y
let anotherArrowStuff = (x, y) => console.log(x + y);
anotherArrowStuff(5, 3);

// arrow function without parameter
let sayHi = () => console.log("Hi");


// foreach() method - can be used on an array, where it executes a certain function for every elemment 
// in the array
const arr = ['squirrel', 'alpaca', 'buddy'];
arr.forEach(e => console.log("The animal is ", e));

/*
spread operator
It is a special operator consists of three dots used before a referenced expression or string and it spreads out 
the arguments orlements of an array
- It is used during function calling

*/
 let spread = ['so', "much", "fun"];
 let message = ["Javascript", "is", ...spread, "and", "very", "powerful"];
 console.log(message);

 function addTwoNumbers(x, y){
    console.log(x + y);
 }

let numbers = [5, 9];
addTwoNumbers(...numbers);
addTwoNumbers(5, 9);

function addFourNumbers(w, x, y, z){
    console.log(w + x + y + z);
}
let a = [6, 4];
let b = [9, 7];
addFourNumbers(...a, ...b);


/*
REST OPERATOR
- It is used during function definition, in place of parameters
- It has the same symbol as the spread operator, but it is used inside the function parameter list. 
- It allows you to supply many arguments 
*/

function someFunction(number1, ...number2){
    console.log(number1, number2);
}

someFunction(56, 54, 53, 37, 89, 23, 54, 22, 78, 50, 97, 65, 21, 46 );
