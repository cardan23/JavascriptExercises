// Exercise 2

// Factory and Constructor functions

//Factory Function Pattern
function createAddress(street, city, zipCode){
    return {
        street,
        city,
        zipCode
    };
}


//Constructor Function Pattern
function Addres(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

//verifying both objects were created
let addressFactory = createAddress('a', 'b', 'c');
let addressConstructor = new Addres('x', 'y', 'z');

console.log('Factory: ', addressFactory);
console.log('Constructor: ', addressConstructor);


    