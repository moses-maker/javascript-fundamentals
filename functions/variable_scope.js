// local variable in a function
function testAvailability(x){
    console.log("Available here:", x);
}

testAvailability("hi");

//console.log("Not available here:", x);

// variable x is only seen inside the function definition block of code.

/*
let vs var
a) let
-  The difference between let and var is that var is function-scoped, which is the 
concept we described above.
-  let is actually not function-scoped but block-scoped.
- A block is defined by two curly braces { }.

b) var
 If we use var, the variable becomes function-scoped and is available anywhere in the 
function block (even before defining with the value undefined).

*/

function test(){
    if(true){
        // local variable
        let x = 100;
        
        // global variable
        var y = 56;

    }
    //console.log("the variable x is local", x);
    console.log("the variable y is global",y);

}

test();

