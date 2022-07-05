//Even, odd exercise
//Show the number and "Even" or "Odd" depending the case
//Example:
//0: EVEN
//1: ODD
//2: EVEN
//3: ODD
//....


showNumbers(15);

function showNumbers(limit){
    for(let i = 0; i <= limit; i++){
        let message = i % 2 === 0 ? "EVEN" : "ODD";
        console.log(i, message);
    }
}
