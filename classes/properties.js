/*
PROPERTIES
-  Properties, sometimes also called fields, hold the data of the class.
-  We have seen one kind of property already, when we created them in our constructors:
*/
class Person{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

// here the properties are "firstname" and "lastname"
// we will create an object 
let p = new Person("Mike", "Peter");
console.log("Hi", p.firstname);

/*
You can add propeties that are not accessible from outside
example:
    class Person{
        #firstname;
        #lastname
        }

we do that by adding hash tag before the name.


*/

class Mtu{
    #firstname;
    #lastname;
    constructor(firstname, lastname){
        this.#firstname = firstname;
        this.#lastname = lastname;
    }
}

// the propeties #firstname and #lastname cannot be accessed from outside
let s = new Mtu("Maria", "Saga");
console.log(p.firstname);


