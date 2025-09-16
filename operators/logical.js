/*
Logical operators
a) and - &&
- It is used to evaluate two different expressions. 
- if both the two expressions are true the overall result is
true, else if one expression is false the overall result is 
false.

b)or - ||
-It is used to evaluate two different expressions.
-if either of the expression is true the overal result is true
if all the two expressions are true the result will be true.

c) not !
- This reverses the outcome of other operators 

*/
let x = 2;
let y = 4;
let z = 7;
let w = 9;
console.log(x < y && w < z);
console.log(x < y && w > z);


console.log(x < y || w < z);
console.log(x < y || w > z);

console.log(!(x < y));

/*
Chapter project
Miles-to-kilometers converter

 Create a variable that contains a value in miles, convert it to kilometers, 
 and log the value in kilometers in the following format:

 "The distance of 130 kms is equal to 209.2142 miles"

 1 mile  = 1.60934 km



BMI calculator
 Set values for height in inches and weight in pounds, then convert the values to 
centimeters and kilos, outputting the results to the console:
 • 1 inch is equal to 2.54 cm
 • 2.2046 pounds is equal to 1 kilo
 Output the results. Then, calculate and log the BMI: this is equal to weight 
 (in kilos) divided by squared height (in meters). Output the results to the console

*/