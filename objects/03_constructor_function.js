//Constructor Function

//This is another pattern to create objects 
//and reuse the source code

//for constructor pattern we should use pascal notation
//first letter use upper case and next words upper case too

//pascal notation: OneTwoThreeFour


//Constructor Function
function Circle(radius){
    //we use "this" to reference itself object
    //in this case we are adding properties to object 
    this.radius = radius;
    this.draw = function() {
        console.log("draw");
    }

    //this return is not necessary, check point 3 below for this explanation
    //return this;
}

//1. "new" creates a new empty object in javascript
//example: const x = {}
//2. "new" will set "this" to new emty object and be able to access
//3. "new" will return the object
//example: return this;
//so its not necessary specify "return this" into contructor function
//"new" does that work for us

const circle = new Circle(2);

//Both, Factory and Constructor patterns
//work for the same purpose and do the same task
//don't waste your time discussing what is better
//just pick one pattern and use it