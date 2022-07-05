//Destructuring assignment of arrays


const characters = ['Goku', 'Vegeta', 'Trunks'];

//Boring way
// console.log(characters[0]);
// console.log(characters[1]);
// console.log(characters[2]);

//using destructuring assignment of arrays
const [ character1 ] = characters;

//ignoring first element of array
const [ , character2 ] = characters;

//ignoring first and second elements of array
const [ , , character3 ] = characters;

//results
console.log(character1);
console.log(character2);
console.log(character3);


const returnArray = () => {
    return ['ABC', 123];
}

const [ letters, numbers ] = returnArray();
console.log(letters, numbers);


//Exercise
const returnArray2 = (value) => {
    return [value, () => { console.log('Hello world!') } ];
}

//Destructuring assignment of a function inside the array
const [ name , myFunction] = returnArray2("Slim Shady");
//calling function
console.log(name);
myFunction();