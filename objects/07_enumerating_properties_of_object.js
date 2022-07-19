//Enumerating properties of an Object

//Circle object
const circle = {
    radius: 1,
    draw(){
        console.log('draw');
    }
};

//"for in"
//this sentence is to go over the object
//objects are not iterables, so we access to every element of the object by the key (circle[key])
for(let key in circle)
    console.log(key, circle[key]);

//"for of"
//this sentence is only for iterables types (arrays and maps) not for objects
//will launch an error into console
//for(let key of circle)
//    console.log(key);

//"for of" like this way
//will work ok due to "Object.keys(obj)" returns an array
//and the array is an iterable type
for(let key of Object.keys(circle))
    console.log(key);

//"for of" like this way
//will work ok due to Object.entries(obj) returns an array (key, value) for every element in the object
//return result: ["radius", 1], ["draw", draw]
for(let entry of Object.entries(circle))
    console.log(entry);

//checking if an object contains a property key
//with "in" operator, result will be 'yes'
if('radius' in circle){
    console.log('yes');
}
else{
    console.log('No');
}