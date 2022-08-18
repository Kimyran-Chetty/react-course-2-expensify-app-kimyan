//First exmaple:

// const Person = {
//     name : 'Kimyran',
//     age : 27,
//     location : {
//         city: 'JHB',
//         temp : 20
//     }
// };
    
// console.log(`${Person.name} is ${Person.age} years old.`);



// //Can do it the tradition way 
// // const name = Person.name;
// // const age = Person.age;


/////////////////////////////////Object destructing: ////////////////////////////////////////////////////

// const {name: firstname = 'Anonymous' , age} = Person;  // Allows for setting defaults
// console.log(`${firstname} is ${age} years old.`);

// const {temp: temperature, city} = Person.location; // Allows for renaming as well

// if(temperature && city) {

//     console.log(` Its ${temperature} degrees in ${city} `);
// }    


// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self Published'} = book.publisher;
// const {title : bookTitle } = book;

// console.log(`${bookTitle} was published by ${publisherName}`);



////////////////////////////////Array - destructing: /////////////////////////////////////////////

//const address = ['1 Mushroom Rd', 'JHB','South Africa', '1681'];
// const address = [];

// //const [street,city,county,zip] = address;
// //or
// const [,city = 'NYC',county = 'U.S',] = address; // No need for changing names but we can provide a default value


// //console.log(` You in the city of ${address[1]} in  ${address[2]}`);

// console.log(` You in the city of ${city} in  ${county}`);

//Challenge:

const item = ['Iced Coffee (cold)', '$2.00', '$2.75','$3.00'];

const [product, ,medCost,] = item;

console.log(`A medium ${product} costs ${medCost}.`);