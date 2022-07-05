//FOR OF

//we use "for of" to iterate over arrays and get the value of each element

let fruits = ["apple", "orange", "pineapple"]

for (let element of fruits)
{
    //we use element as value
    //This will print the element of the array
    console.log(element);
} 

//At difference "for in" is to iterate over objects
//with "for in" we need to use the element as index and not as the value.

//FOR IN EXAMPLE and DIFFERENCE
for(let element in fruits)
{
    //we use element as index
    console.log(fruits[element]);
}