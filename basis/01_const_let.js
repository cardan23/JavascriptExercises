console.log("hello world!!");

//Variables and Const

const name = 'Daniel';
let lastName = 'Avila';

let givenValue = 5;

console.log( name, lastName, givenValue)

if(true){

    //here for "givenValue" the scope is different
    // to previos variable with the same name, so console will display "6".
    let givenValue = 6;
    console.log(givenValue);
}

//here for "givenValue" the scope is different
// to previos variable (inside "if" scope) with the same name, console will display "5".
console.log(givenValue);