//Template string
//works to concatenate strings, add values to string, add some results to string, etc.
//is very useful in daily work for a developer.


const name = "Daniel";
const lastName = "Avila";

//To write the backtick we can use "Atl Gr" key + "}" key on my Huawei computer
const fullName = ` Hello Sr. ${name} ${lastName} `;

console.log(fullName);

//an adventage of this is we can write several lines for the same string, for example:
//write on console something like this:

//Hello Sr. 
//Daniel 
//Avila 
const fullName2 = ` Hello Sr. 
${name} 
${lastName} `;

console.log(fullName2);

//Template string with function
function getHi(name, lastName){
    return `Hello Sr. ${name} ${lastName}`
}

console.log(`This is a text: ${getHi(name, lastName)}`);


