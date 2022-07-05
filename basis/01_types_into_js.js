//Types into Javascript

//Primitive / value types

//String
let name = "Daniel"; //string

//Number
//As you can notice every value into js is "number" type. 
//to different to other programming languages we have float, double, decimal, etc.
//in javascript we have only "number" type

let age = 27; //number
let credit = 27.34; //number

//Boolean
let isApproved = true; //boolean

//undefined
let firstName = undefined; //undefined

//Object
let selectedColor = null; //object

// Reference types
//1. Object
//2. Array
//3. Function

//Object example
let user = {
    name: "Carlos",
    lastName: "Avila",
    age: 27,
};

//Array example
let fruits = ["apple", "water-melon", "lemmon", "pineapple"];

//Function example
let addToNumbers = (number1, number2) => {
    if(number1 && number2){
        return number1 + number2;
    }
    return 0;
}