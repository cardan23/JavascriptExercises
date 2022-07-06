//Object basis

//instead to have all variables like this way
let radius = 1;
let x = 1;
let y = 1;

//we can have an object like this
//all variables related together in one place
//Object-oriented Programming (OOP)
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


//A function from an object is called "Method"
circle.draw();