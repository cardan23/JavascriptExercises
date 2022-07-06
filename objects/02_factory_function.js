//Factory functions

//The problem with this object is:
//we cannot replicate or create more objects
//from this, we need to copy entire object and change values for a different object
//For example:
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    IsVisible: true,
    draw: function(){
        console.log("draw");
    }
};

//Same object with different values
const circle2 = {
    radius: 2,
    location: {
        x: 2,
        y: 2
    },
    IsVisible: true,
    draw: function(){
        console.log("draw");
    }
};


//FACTORY FUNCTIONS pattern
//factory functions are here to not duplicate source code like above
//creating a factory function to create objects and reuse source code

//This is a factory function
function createCircle(radius){
    return {
        //in javascript if the key and the value assigned is the same name
        //we can have just one of them, both cases are the same behavior
        //radius, 
        radius: radius,

        //this function notations is the same than
        //draw: function(){}
        draw(){
            console.log("draw");
        }
    };
}

//As you can see we use camel notation to named the factory function
//createCircle, first letter is lower case and then every word after this
//will use upper case

//Camel notation: oneTwoThreeFour

//With this way we are using just one logic to create different objects

const circle3 = createCircle(2);
console.log("circle1: ", circle1);


const circle4 = createCircle(4);
console.log("circle2: ", circle2);


