//Value vs Reference Types

//Value types
//Number
//String
//Boolean
//Symbol
//undefined
//null


//Reference types
//Object
//Fuction
//Array

//value type example
//this are two independent variables
    let x = 10;
    let y = x;//copied by value

    x = 20;

    //showing independent variables
    console.log("independent variables");
    console.log("x: ", x);//will print 20
    console.log("y: ", y);//will print 10

//Reference type example
//this are two variables by reference
    let w = { value: 10 };
    let z = w;//copied by reference

    w.value = 20;
    
    //showing referenced variables
    //will print same value due to both variables are pointing the same object
    //both variables contains the same reference to object
    console.log("copied by reference variables");
    console.log("w: ", w.value);//will print 20
    console.log("z: ", z.value);//will print 20


    //Primitives are copied by value
    //Objects are copied by their reference


    let number = 10;
    function increaseByValue(number){
        number++;
    }

    //Here number is a primitive type and is passed as parameter
    //so is copied by value
    increaseByValue(number);
    console.log("number: ", number);//result will be 10

    const obj = { value: 10 }
    function increaseByReference(obj){
        obj.value++;
    }
    
    //Here obj is a referece type and is passed as parameter
    //so is copied by reference
    increaseByReference(obj);
    console.log("object: ", obj);//result will be 11



