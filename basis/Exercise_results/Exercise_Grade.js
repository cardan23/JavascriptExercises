//Grade Exercise

//Description: get the grade of the array depending the average

const marks = [90, 90, 90];

//Average = 70

//1-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

console.log(calculateGrade(marks));
console.log(calculateGrade2(marks));

function calculateGrade(marks){

    let average = 0;
    for(let value of marks){
        average += value;
    }

    average = average / marks.length;
    console.log(average);

    let grade = '';
    switch(true){
        case average >= 1 && average <= 59:
            grade = 'F';
            break;
        case average >= 60 && average <= 69:
            grade = 'D';
            break;
        case average >= 70 && average <= 79:
            grade = 'C';
            break;
        case average >= 80 && average <= 89:
            grade = 'B';
            break;
        case average >= 90 && average <= 100:
            grade = 'A';
            break;
        default:
            grade = 'F';
    }

    return grade;
}

function calculateGrade2(marks){

    let average = 0;
    for(let value of marks){
        average += value;
    }

    average = average / marks.length;
   
    if(average < 60) return 'F'
    if(average < 70) return 'D'
    if(average < 80) return 'C'
    if(average < 90) return 'B'
    if(average < 100) return 'A'

    return 'F';
}