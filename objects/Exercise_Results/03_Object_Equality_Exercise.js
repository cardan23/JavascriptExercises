// Exercise 3

// Object Equality

//1. Constructor function
function Addres(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

//2. Are equal function
function areEqual(address1, address2){
    for(let key in address1){
        if(address1[key] !== address2[key]){
            return false;
        }
    }
    return true;
}

//3. Are same function
function areSame(address1, address2){
    return address1 === address2;
}


let address1 = new Addres('a', 'b', 'c');
let address2 = new Addres('a', 'b', 'c');

//verifying results on console
let areEqualObjects = areEqual(address1, address2);
let areSameObject = areSame(address1, address2);

console.log("Are equal objects: ", areEqualObjects);
console.log("Are same object: ", areSameObject);