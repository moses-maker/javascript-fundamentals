/*
-Under normal circumstance one value is stored in a variable.
E.g. let total = 100;
- Arrays enables you to store multiple values in the same variable.
E.g let total = [100, 450, 432, 234];

Creating arrays
- An array is created using the opening [ bracket and closing square bracket ] 
- Syntax:
        let arrayname = [item1, item2m , item3];

        - here the name of the array is "arrayname".
        - the values in the array are called "items". in this case item1, etc.
*/
//creating an array of strings only
let fruits = ["mangoes", "oranges", "apples", "banana", "avocado", "lemon"];
console.log(fruits);

// array of numbers
let years = [2000, 2005, 2010, 2015, 2030, 2035];
console.log(years);

// mixed arrays; 
let mixed_arrays = ["mangoes", 2017, 54.95, true];
console.log(mixed_arrays);

/*
ACCESSING ELEMENTS
- Each item in the arrays has index position, 
        item1 - index position 0
        item2 - index position 1
        item3 - index position 2
        item4 - index position 3

- To access item1 in index position 0 we use the following syntax;
        let cars = ["Toyota", "Subaru", "Volkswagen"];
        console.log(cars[0]);

        // you can store the retrieved item in a variable
        let y = cars[0];
        console.log(y);

Reverse index -1, -2, -3
*/
// arr
let cars = ["Toyota", "Subaru", "Volkswagen"];
console.log(cars[0]);
console.log(`I saw ${cars[1]} today.`);

// modifying
cars[2] = "Mazda";
console.log(cars);

// length property - tells you the total numbers of items in an array.
numbers = [12, 24, 36];
console.log(`I have ${numbers.length} items.`);

/*
 Practice exercise 3.1
 1. Create an array to use as your shopping list with 
3 items: "Milk," "Bread," and "Apples."
 2. Check your list length in the console.
 3. Update "Bread" to "Bananas."
 4. Output your entire list to the console.

*/