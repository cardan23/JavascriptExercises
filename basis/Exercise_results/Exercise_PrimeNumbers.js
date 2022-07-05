// Exercise prime numbers

//A prime number is all the numbers whose factors are only 1 and itself
//Examples: 2,3,5,7,11,13....

//Show all the prime numbers until the given limit
showPrimes2(10);

//Way to resolve the problem n. 1
function showPrimes(limit){

    for(let number = 2; number <= limit; number++){
        let isPrime = true;
        for(let factor = number-1; factor >= 2; factor--){//just go decrementing the factor
            if(number % factor === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            console.log(number);
        }
    }
}

//Way to resolve the problem n. 2 --> same principle just go incrementing the factor
function showPrimes2(limit){
    for(let number = 2; number <= limit; number++){

        let isPrime = true;
        for(let factor = 2; factor < number; factor ++){
            if(number % factor === 0){
                isPrime = false;
                break;
            }
        }

        if(isPrime){
            console.log(number);
        }
    }
}

//Way to resolve the problem n. 3 --> same principle just go incrementing the factor
//Refactoring solution n. 2
function showPrimes2(limit){
    for(let number = 2; number <= limit; number++){
        if(IsPrime(number)){
            console.log(number);
        }
    }
}

function IsPrime(number){
    for(let factor = 2; factor < number; factor ++){
        if(number % factor === 0){
            return false;
        }
    }
    return true;
}