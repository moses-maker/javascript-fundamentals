let company = {
    compnayName:"Healthy Candy",
    activity:"food manufacturing", 
    address:{
        street:"2nd street",
        number:"123",
        zipcode:33116,
        city:"Miami",
        state:"Florida"
    },
    yearOfEstablishment:2025
};

// accessing and modifying properties of the address, use the two
// approaches
company.address.zipcode = 300600;
company["address"]["number"] = "582";

console.log(company);


// arrrays in an object
let company2 = {
    compnayName:"Healthy Candy",
    activities:["food manufacturing", "improving kids health", "manufacturing toys"], 
    address:{
        street:"2nd street",
        number:"123",
        zipcode:33116,
        city:"Miami",
        state:"Florida"
    },
    yearOfEstablishment:2025
};

// accessing an array item in an object
let activity = company2.activities[1];

console.log(activity);

// objects in arrays
let addresses = [
    {
    street:"2nd street",
    number:"123",
    zipcode:"333116",
    city:"Miami",
    state:"Florida"
    },
    {
    street:"1st West avenue",
    number:"5",
    zipcode:"75001",
    city:"Addison",
    state:"Texas"
    }
];

// accessing a property in an an array in an object
let streetName = addresses[0].street;
console.log(streetName);

// modify a property in an array in an object.
addresses[1].zipcode ="67875";
console.log(addresses);

/*
 Practice exercise 3.5
 1. Create an object named people that contains an empty array that is called 
friends.
 2. Create three variables, each containing an object, that contain one of your 
friend's first names, last names, and an ID value.
 3. Add the three friends to the friend array.
 4. Output it to the console


Chapter projects
 Manipulating an array
 Take the following array: 
const theList = ['Laurence', 'Svekis', true, 35, null, undefined, 
{test: 'one', score: 55}, ['one', 'two']];
 Manipulate your array using various methods, such as pop(), push(), shift(),
  and 
unshift(), and transform it into the following:
 ["FIRST", "Svekis", "MIDDLE", "hello World", "LAST"]
 You can take the following steps, or adopt your own approach:
 • Remove the first item and the last item.
 • Add FIRST to the start of the array.
 • Assign hello World to the fourth item value.
 • Assign MIDDLE to the third index value.
 • Add LAST to the last position in the array.
 • Output it to the console.


Company product catalog
 In this project, you will implement a data structure for a product catalog and create 
queries to retrieve data.
 1. Create an array to hold an inventory of store items.
 2. Create three items, each having the properties of name, model, cost, and 
quantity.
 3. Add all three objects to the main array using an array method, and then log 
the inventory array to the console.
 4. Access the quantity element of your third item, and log it to the console. 
Experiment by adding and accessing more elements within your data 
structure.
*/
