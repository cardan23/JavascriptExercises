//Arrays in JS

//We can create an array like this way but is not very common
//avoid to use it please
const myArray = new Array();

//Better way to create an array
const array = [];

//If we want to add some elements to array
//we do NOT recommend to use push function due to this modifies the main object.
array.push(1);
array.push(2);
array.push(3);
array.push(4);

//If we want to create a new array with same values of another array
//better to use "spread operator (...)" than push
const array2 = [...array, 5];

console.log(array);
console.log(array2);

///map() function example to do something with each element
// into a new array and get values.
// Map function receives a function and return a value for every element in the array.
const array3 = array2.map(function(x){
    return x
});

console.log(array3);
