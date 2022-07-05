//Promises


import { getHeroeById }  from './08_import_export'

//Documentation about promises
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

//Creating a promise
//A promise have a callback with two parameters, wich are callbacks too.
//resolve and reject, called like this by convention but this name is optional
//resolve is called once the promise is sucessful
//reject is called if the promise fail or something wrong happened
// const promise = new Promise( (resolve, reject) => {


//     //This setTimeout function is from javascript
//     //let us execute a task in a period of time
//     //receives a callback and the second argument is the time
//     //we want to wait to execute the call back (is in miliseconds)
//     setTimeout(() => {
//        const hero = getHeroeById(2);
       
//        //All Ok we send the object retrivered to then
//        resolve(hero);

//        //Something fail and we call the reject, we send this error to "catch" to manage this error
//        //reject('we cannot retrieve the hero sorry about it :(');
//     }, 2000);
// });

//Everything in promise is correct, and is executed after the promise
//promise.then()

//Something in promise is wrong, and is executed after the reject
//promise.catch()

//is executed after the resolve or reject, after the end of the promise
//promise.finally()


//We get the hero from resolve in the promise and used here on "then" after promise ends
// promise.then((hero) => {
//     console.log('Then of the promise successful', hero);
// })
// //We get the error message from reject in the promise and used here on "catch" after promise ends
// .catch( (err) => {
//  console.warn("Error calling the Promise...", err);
// });


//Exercise managing then and catch 
const getHeroByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
           const hero = getHeroeById(id);

           if(hero){
               resolve(hero)
           }
           else{
               reject('we cannot find an hero with this Id, please check');
           }
           resolve(hero);
        }, 2000);
    });
}

getHeroByIdAsync(2)
.then( console.log )
.catch( console.warn );