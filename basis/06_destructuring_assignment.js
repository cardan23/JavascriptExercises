//Destructuring assignment javascript

const person = {
    name: 'Dany',
    age: '27',
    key: 'AKEY'
};

//Here we are using Destructuring assignment
//we are getting only the values we want from person object
//and assing this to a variable
//we are using the same name of variables
const { name, age } = person;

//for a different name of variables we can do the next thing
//same result but with different names for variables
const { name: name2, age: age2 } = person;


//Destructuring assingment
const returnPerson = (user) => {
    const {age, name } = user;
    console.log(`Destructuring assingment: ${name} ${age}`);
}

//Destructuring assingment from parameter 
//we are using "Destructuring assingment" from parameter and using variables
//inside the function, very useful !!
const returnPersonParameter = ({age, name}) => {
    console.log(`Destructuring assingment from parameter: ${name} ${age}`);
}

//Destructuring assingment from parameter
//Value by defect (rank)
//it doesn't exist on person object but we can add it and add default value
const returnPersonValueByDefect = ({age, name, rank = "sergeant"}) => {
    console.log(`Destructuring assingment from parameter: ${name} ${age} ${rank}`);
}

console.log(person.name);
console.log(person.age);
console.log(person.key);

//Destructuring result

console.log(name, age);
console.log(name2, age2);
returnPerson(person);
returnPersonParameter(person);
returnPersonValueByDefect(person);


//Exercise
const callObject = ({age, name, rank = "sergeant"}) => {
    return {
        nameOfperson: name,
        rank: rank,
        map: {
            latitude: 13.3564,
            longitude: -12.4567,
        }
    };
};

//Destructuring assignment
const {nameOfperson, rank} = callObject(person);

//Destructuring assignment result
console.log("Exercise: ", nameOfperson, rank);

//Destructuring assignment for nested objects
//first on map:{} we are telling javascript search inside the map object
//and then find "latitude" and "logitude" values
const {map:{latitude, longitude}, rank: rank2} = callObject(person);
console.log("Destructuring assignment nested objects: ", latitude, longitude, rank);