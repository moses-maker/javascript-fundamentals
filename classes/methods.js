/*
Methods
-  Functions on a class are called methods.
-  When defining these methods, we don't use the function keyword. We start directly with the name:
*/

class Person{
    //the first method constructor method
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    // the second method, user defined method
    greet(){
        console.log("Hi, there i am", this.firstname);
    }

    // second method with a parameter
    compliment(continent){
        return "the continent is " + continent; 
    }
}

let p = new Person("James", "Peter");

// use the p oobject to access the class and pick the methods
let method_one = p.compliment("Africa");
console.log(method_one);