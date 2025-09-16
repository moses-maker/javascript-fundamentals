/*
ARRAY METHODS
a) Adding and replacing elements.
    push() 
    -this method is used to add an item as the last item in 
    the array.

    splice()
    - to add elements at a certain index position we use
    splice() method.

    concat()
    - joins two arrys together


*/

// push()
favoriteFruits = ["grapefruit", "orange", "lemon"];
//add an item using push() method
favoriteFruits.push("mango");
console.log(favoriteFruits);

// to add an element at a certain index
let shapes = ["circle", "triangle", "rectangle", "pentagon"];
console.log(shapes);
// 2 is the index position to insert the two items, 0 is the number of items 
// to delete
shapes.splice(2, 0, 'square', "trapezoid");
console.log(shapes);

// concat()
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let joined = arr1.concat(arr2);
console.log(joined);

/*
Deleting elements
> To remove the last item from an array we use the pop() 
method.
1. pop()
2. splice()

*/
//pop()
let countries = ["kenya", "uganda", "tanzania", "ethiopia", "sudan", "burundi"];
countries.pop(); // burundi is removed
console.log(countries);

// splice()
countries.splice(3, 2);
console.log(countries);

/*
Finding elements
find() - this function will be executed on every element in the array until it
finds a match, and if it does not, then it will return undefined

indexOf()
Gets you the index position of the item in the array.

sort()
This mthod is used to sort values from small to high and strings A-Z.

reverse()
-This method puts the last element first and the first element last.
*/
arr8 = [ 76, 43, 33, 99, 32, 45, 74];
let findValue = arr8.find(e => e === 32);
console.log("Found", findValue);
// index position of 32
console.log("Index position of 32 is >", arr8.indexOf(findValue));

//sort() method
arr8.sort()
console.log(arr8);

//reverse()
arr8.reverse()
console.log(arr8);

/*
 Practice exercise 3.2
 1. Create an empty array to use as a shopping list.
 2. Add Milk, Bread, and Apples to your list.
 3. Update "Bread" with Bananas and Eggs.
 4. Remove the last item from the array and output it into the console.
 5. Sort the list alphabetically.
 6. Find and output the index value of Milk.
 7. After Bananas, add Carrots and Lettuce.
 8. Create a new list containing Juice and Pop.
 9. Combine both lists, adding the new list twice to the end of the first list.
 10. Get the last index value of Pop and output it to the console.
 11. Your final list should look like this:

 ["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice", 
"Pop", "Juice", "Pop"]

*/

