// Exercise showing stars

showStars(5);
showStars2(5);

function showStars(rows){
    let asterisc = "*"
    
    for(let i = 1; i <= rows; i++){
        let multipleString = asterisc.repeat(i);
        console.log(multipleString,"\n");
    }
}

//Another way to resolve the problem
function showStars2(rows){
    
    for(let i = 1; i <= rows; i++){
        let pattern = '';
        for(let j = 0; j < i; j ++){
            pattern += '*';
        }
        console.log(pattern);
    }
}