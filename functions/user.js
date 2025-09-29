// function definition without parameter
function greeting(){
    console.log("Hello world");
}

// function call
greeting()


// function definition with a parameter
// parameter - placeholder variable that holds the values supplied
// as argument during function calling.
function rectangle(length, width){
    console.log(`The area is ${length}m x ${width}m = ${length * width}m2`);
}

// function call
// arguments are supplied during function calling
rectangle(78, 50);

// VARIABLE CONTAINING FUNCTION
// you can store a function in a variable
let varContainingFunction = function(){
    let varInFunction = "I am in a function.";
    console.log("Hi there", varInFunction);
}

// to call this function use the following syntax
varContainingFunction();