/*
The boolean data type can hold two values
    true
    false
- It is majorly used in control flow statements.

typeof()
- This function return the datatype of the value
stored in a variable.

Conversions or typecasting
Ther are three conversion methods
    String()
    Number()
    Boolean()


*/
let numberToString = 6;
console.log(numberToString, typeof(numberToString));

let convert = String(numberToString);
console.log(numberToString, typeof(convert));

// Number()
let nr1 = 2;
let nr2 = '2';
console.log(typeof(nr2));
console.log(nr1 + Number(nr2));








let option_one = 100;
console.log(typeof(option_one));

let option_two = 150;
console.log(typeof(option_two));

let string_value = "this is a message";
console.log(typeof(string_value));


console.log(option_one > option_two);
