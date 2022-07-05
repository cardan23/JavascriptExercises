//Demerit point exercise
//Speed limit = 70
//5 -> 1 point
//Math.floor(1.3)
//12 points -> license suspended

console.log(checkSpeed(80));

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed < speedLimit + kmPerPoint){
        return 'Ok';
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    
    if(points >= 12){
        return 'License suspended';
    }
    return 'Points: ' + points;
}