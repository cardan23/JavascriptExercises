//String

//String documentation in javascript
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

//We have two types of strings in javascript, string primitive and string object.
//1. String primitive does not contains anything, just string value.
//2. String object contains methods and properties for this object.

//string primitive
const message = 'Hi, this is a primitive string';

//string object
const anotherMessage = new String('hi another');

//QUESTION
//Why we have methods if "messagge" is a primitive string?
message.includes('i');


//well, when we use dot "." notation into a primitive string
//javascript engine internally wraps this with string object
//we dont see that but you can work with a string object


//Examples of string methods
console.log("Length", message.length);
console.log("includes", message.includes('i'));
console.log("includes", message.includes('baby'));
console.log("startsWith", message.startsWith('h'));
console.log("startsWith", message.startsWith('k'));
console.log("endsWith", message.endsWith('ing'));
console.log("endsWith", message.endsWith('all'));
console.log("indexOf", message.indexOf('primitive'));
console.log("toUpperCase", message.toUpperCase());
console.log("toLocaleLowerCase", message.toLocaleLowerCase());
console.log("split", message.split(' '));

//Escape notation
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#escape_sequences

//Escape notations is in case we need to use some special character into a string.

//Example:
console.log("Escaping \'");
console.log("Escaping \"");
console.log("Escaping \0");
console.log("Escaping \v");
console.log("Escaping \t");
console.log("Escaping \b");
console.log("Escaping \f");
console.log("Escaping \\");
console.log("Escaping \n");