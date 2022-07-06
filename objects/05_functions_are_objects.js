//Functions in javascript are objects

//Constructor Function to create objects
function Circle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}

const myCircle = new Circle(1);
console.log("my circle: ", myCircle);

//How js works internally with the code above
//In javascript at the moment to create a new function like "Circle(radius)"
//by default calls to another Constructor Function like this
//this is how js works internally and creates the constructor functions

const Circle1 = new Function('radius', `
this.radius = radius;
this.draw = function() {
    console.log("draw");
}`);

//You can create an object like others 
const anotherCircle = new Circle1(2);
console.log("another circle: ", anotherCircle);


//So when we 

//Constructor Function to create objects
function CircleX(radius){
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }
}

//js internally calls one method at the moment to use "new" keyword

//first parameter is an empty object and assign "this" reference to that object
//second parameter is the parameter that receive the Constructor Function (radius)
//we can send all parameters that Constructor Function receives.
Circle.call({}, 1);

//js internally calls one method at the moment to use "new" keyword
//just like "call" method, the unique difference is the way to take the parameters

//first parameter is an empty object and assign "this" reference to that object
//second parameter is an array of all parameter values that receive the Constructor Function 
//we can send all parameters that Constructor Function receives.
Circle.apply({}, [1]);

const circleX = new CircleX(1);
console.log("circle X: ", circleX);
