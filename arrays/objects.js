/*
Objects are used to decribe real-life objects as well as more complex concepts.
- Array is an example of object

*/

// test to see if array is an object
let arr = [0, 1, 2];
console.log(typeof arr);

// example object "dog"
// to create an object use curly brackets "{" and "}"
let dog = {
    dogName:"JavaScript",
    weight:2.4,
    color:"brown",
    breed:"chihuahua",
    age:3,
    burglarBiter:true
};

// dogName, weight, color, breed, age, burglarBitter are properties of the
// object called "dog"

//To access properties of an object we do the following
console.log("The dog has the following weight", dog.weight);

// to update a new value to a property in an object
dog["color"] = "blue";
dog.weight = 3.2;
console.log(dog);

let bd = "BullDog";
dog.breed = bd;
console.log(dog);

/*
 Practice exercise 3.4
 1. Create a new myCar object for a car. Add some properties, including, 
 but not limited to, make and model, and values for a typical car or your 
 car. Feel free to use booleans, strings, or numbers.
 2. Create a variable that can hold the string value color. This variable 
containing a string value color can now be used to reference the property 
name within myCar. Then, use the variable within the square bracket notation 
to assign a new value to the color property in myCar.
 3. Use that same variable and assign a new property string value to it, such as 
forSale. Use the bracket notation once again to assign a new value to the 
forSale property to indicate whether the car is available for purchase.
 4. Output make and model into the console.
 5. Output the value of forSale into the console.
*/