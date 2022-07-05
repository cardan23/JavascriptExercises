//Sum of multiples of 3 and 5

//Description: given a number (For example 10) we need to sum all multiples of 3 and 5, stop until given number (untill 10)
//Multiples of 3: 3, 6, 9
//Multiples of 5: 5, 10
//Result will be 33 (sum of all multiples)

console.log(sumMultiples(0));

function sumMultiples(limit){
    let result = 0;

    for(let i = 1; i <= limit; i++){
        if(i % 3 == 0 || i % 5 == 0){
            result += i;
        }
    }

    return result;
}