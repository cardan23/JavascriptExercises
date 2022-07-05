//Functions in javascript

//Avoid this kind of creations for functions
//we can overwrite the funtion by a value and lost the reference to this function.
function getHi1(name){
    return `Hi ${name}`; 
}

//Better way to create functions in javascript
//we cannot change or lose the reference of the function
const getHi = function(name){
    return `Hi ${name}`; 
}

//Arrow function
//same result than previous function
const getHiArrow = (name) => {return `Hi ${name}`}; 

//Arrow function too
//same result than previous function
const getHiArrowToo = (name) => `Hi ${name}`; 

console.log(getHi('Danielito'));
console.log(getHiArrow('Danielito'));
console.log(getHiArrowToo('Danielito'));


//Returning an object with arrow function
//How to say to javascript we want to return an object into an arrow function.
//use () out  of the object to let javascript know this.
const getObject = () => ({
    uuid: '453445m5n2j45',
    userName: 'papiChuloSinH'
}); 

console.log(getObject());

//Exercise of previous lesson
const getActiveUser = (name) => ({
    uuid: '4524DADF', 
    userName: name
});

console.log(getActiveUser('Fabiola'));
