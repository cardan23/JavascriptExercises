//Dynamic Nature of Objects

//In javascript is natural that objects are dynamic
//what we are trying to say with dynamic?...
//well we can add or modify the properties of an object
//example:

const circle = {
    radius: 1
};

//so we can add more properties to object

circle.color = 'green';
circle.draw = function(){}

//showing in console previous changes to object
console.log("circle:", circle);

//so we can delete properties from object
delete circle.color;
delete circle.draw;

//showing in console previous changes to object
console.log("circle:", circle);

//A confusing point commonly is the keyword "const"
//the question is: why we can modify an object if we are creating this with "const" keyword
//const circle = { ... }
//response for question: "const" keyword is to avoid assigning another different COMPLETE object 
//but we can still modify, delete or add properties on it.

//this will throw an error on console due to we are trying to assign a complete empty and different object
//to "const" circle object
circle = {
    radius: 2
};