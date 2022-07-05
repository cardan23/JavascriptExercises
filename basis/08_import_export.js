//import { heroes } from './data/heroes';
//using imp word ant tab key to be faster importing resources
//import { heroes } from './data/heroes'

import { heroes } from "../data/heroes";


//get one element of array
export const getHeroeById = (id) => {
    return heroes.find(element => element.id === id);
}

//console.log(getHeroeById(3));


//Get several elements of array
export const getHeroeByOwner = (owner) => {
    return heroes.filter(x => x.owner === owner);
}
//console.log(getHeroeByOwner('DC'));