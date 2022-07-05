
//Literal Objects

const person = {
    name: 'Dany',
    lastName: 'Avila',
    age: 27,
    address: {
        city: 'New York',
        zipCode: '34454',
        latitude: '23.5655',
        longitude: '14.4554',
    }
};

//to visualize the object as a table
//console.table(person);
console.log(person);


//In javascript, here we are copying the reference (address of the object in memory)
//of the object, NOT copying the value.
//This important due to in React we have a lot of issues if we don´t understand this concept
const person2 = person;

//if we change some value of person2, we going to change the value of "person" too.
person2.name = "Carlos";

//Result will be same object
console.log('\nModifying person2 name value')
console.log(person);//same object
console.log(person2);//same object


//To copy a new object into a different reference (complete new object with same values)
//javascript uses the "Spread operator" like this:
//{...person}
const person3 = {...person};
person3.name = "Jessie";

//Result will be different object
console.log('\nModifying person3 name value')
console.log(person);//different object
console.log(person3);//different object