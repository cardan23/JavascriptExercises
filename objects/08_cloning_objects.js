//Cloning an Object

//we want to copy all the properties from one object to another
//we can use "=" operator like this:
//  const obj2 = obj1;
//but this is not a copy
//we are just copying the reference of memory and if we affect one object
//the new object will be affected too.

//for copying properties from one object into another 
//we can do that with three different ways like below.

    //origin Object 
    const circle = {
        radius: 1,
        draw(){
            console.log('draw');
        }
    };

    //creating a new object
    //destiny object
    const another = {};

//1. Cloning object (old way) 

    //going over the origin obj (circle)
    //old way to do this, but it works
    for(let key in circle){
        
        //adding every property into the new obj (destiny obj, "another")
        another[key] = circle[key];
    }

    console.log('circle cloned by for loop', another);

    //if we modify origin object this will NOT affect destiny object
    //we have copied all values and NOT the reference 
    circle['radius'] = 2;
    console.log('circle modified', circle);
    console.log('circle not modified', another);


//2. Cloning object (with assign method)

    //this assign method receives two parameters (destiny obj, origin obj)
    const anotherCircle = Object.assign({}, circle);
    console.log('circle cloned by assign method', anotherCircle);
    
    
    //we can add more properties into destiny object
    const anotherCircle2 = Object.assign({
        //adding new property to destiny object
        color: 'yellow' 
    }, circle);

    console.log('circle cloned and adding property by assign method', anotherCircle2);


//3. Cloning object (Spread operator)

    //most elegant way to cloning an object
    //using spread (...) operator
    const circleSpread = { ...circle };
    console.log('circle cloned by spread operator', circleSpread);

    //using spread (...) operator
    //adding a new property and copying circle properties
    const circleSpread2 = { color: 'green', ...circle };
    console.log('circle cloned and adding property by spread operator', circleSpread2);



