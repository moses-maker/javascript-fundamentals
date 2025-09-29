/*
RETURN FUNCTION
- This types of function has "return" keyword as the last statement in the function definition 

*/

function addTwoNumbers(x, y){
    return x + y; // this is the return statement.
}

// to call this type of function you must supply a variable called instance variable
// to hold the function call.
 
//let result = addTwoNumbers(4, 5);
//console.log(result);

for(let i=0; i<10; i++){
    let result = addTwoNumbers(i, 2*i);
    console.log(result);
}


// return in arrow function
let addThreeNumbers = (x, y, z) =>{
    console.log("Adding...");
    return x + y + z;
}
console.log(addThreeNumbers(4, 6, 8));
let instance_variable = addThreeNumbers(9, 2, 5);
console.log(instance_variable);