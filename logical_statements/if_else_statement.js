// take length and width of a rectangle.
let length = Number(prompt("Enter length?"));
let width = Number(prompt("Enter width"));

// calculate the area 
let area = length * width;

// display the result on browser instead of terminal
// as we are used to.
document.writeln("The area of the rectangle is: ",area);
console.log("The area of the rectangle is: ", area);

// if statement
if(area>=50){ // is area greater or equal to 50. answers are two (true or false)
    // if true if block is executed if(true){ block }
    alert(`The shape is very small it has ${area}m2`);
}
else{
    // if false else{ block } is executed
    alert(`The shape is very big it has ${area}m2`);
}

/*
 Practice exercise 4.2
 1. Create a prompt to ask the user's age
 2. Convert the response from the prompt to a number Number()
 3. Declare a message variable that you will use to hold the console message for 
the user
 4. If the input age is equal to or greater than 21, set the message variable to 
confirm entry to a venue and the ability to purchase alcohol
 5. If the input age is equal to or greater than 19, set the message variable to 
confirm entry to the venue but deny the purchase of alcohol
 6. Provide a default else statement to set the message variable to deny entry if 
none are true
 7. Output the response message variable to the console

*/
