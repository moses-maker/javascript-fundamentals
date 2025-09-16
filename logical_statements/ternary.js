/*
Ternary operator
- The syntax:
    operand ? operand ? operand;

*/
let marks = 60;
let remarks = marks < 50 ? "Fail" : "Pass";
console.log(remarks); 

// another version
let m = 70;
let w = 60;
m < w ? console.log("Fail again") : console.log("pass again");