//Address Object Exercise

//Description:
    //create an Addres object with next fields:
        //street
        //city
        //zipcode


const address = {
    street: "pineapple avenue",
    city: "Los Angeles",
    zipCode: "90002"
}

function showAddress(address){

    for(let field in address){
        console.log(`${field}: ${address[field]}`);
    }

}

showAddress(address);