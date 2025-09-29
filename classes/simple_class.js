// this is  class definition
class Person{
    // constructor method
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

// create a new object called "p" from the Person class
let p = new Person("Mike", "van Putten");

// the object p will be used to access attributes or properties of a class.
// to access the first name and last name
let access1 = p.firstname;
let access2 = p.lastname;

console.log(`hello there ${access1} ${access2}`);