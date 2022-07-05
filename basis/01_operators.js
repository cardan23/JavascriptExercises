//Operators

//Arithmetics
//we use this kind of operator to do some calculates

    let x = 30;
    let y = 10;

    console.log(x + y);
    console.log(x - y);
    console.log(x * y);
    console.log(x / y);
    console.log(x % y);
    console.log(x ** y);//Expontent, "x" to "y" power

    //increment (++)
    console.log(++x);//Incremented by one first and then we will see in the console
    console.log(x++);//we will see the value in the console and then we will Increment by one 

    //Decrement (--)
    console.log(--x);//decremented by one first and then we will see in the console
    console.log(x--);//we will see the value in the console and then we will decrement by one

    let r = 10;
    let t = r++;//Incremented by one first and then we will be assigned to t
    console.log("r: ", r, "t: ", t);//r: 11, t: 10

//Assignment (=)

    let k = 10;
    
    k++; //k incremented by one
    k = k + 1; //same k incremented by one

    k = k + 5;//k incremented by five
    k += 5;//same k incremented by five

    k = k * 3;//k multiplicated by three
    k += 3;//same k multiplicated by three

//Comparison

    let g = 1;

    //Relational
    console.log(g > 0); //greater than
    console.log(g >= 0); //greater or equal than
    console.log(g < 0); //lower than
    console.log(g <= 0);//lower or equal than

    //Equality
    console.log(g == 0); //Comparison by value
    console.log(g === 0); //Comparison by value and type
    console.log(g !== 0); //Comparison by value and type


//Ternary operator (? :)

    //if a customer has more than 100 points,
    //they are a 'gold' customer otherwise,
    //they are a 'silver' customer.

    var points = 110;
    let type = points > 100 ? 'gold' : 'silver';

    console.log(type);

//Logical operators (boolean values)

    //logical AND (&&)
    //Returns TRUE if both operands are TRUE
    console.log(true && false);

    let highIncomeAND = true;
    let goodCreditScoreAND = true;
    let eligebleForLoanAND = highIncomeAND && goodCreditScoreAND;

    console.log("eligebleForLoan: ", eligebleForLoanAND);

    //logical OR (&&)
    //Returns TRUE if one of the operands is TRUE
    console.log(true || false);

    let highIncomeOR = true;
    let goodCreditScoreOR = true;
    let eligebleForLoanOR = highIncomeOR || goodCreditScoreOR;
    
    console.log("eligebleForLoanOR: ", eligebleForLoanOR);

    //logical NOT (&&)
    //Returns opposite of some logical value
    console.log(true || false);

    let highIncomeNOT = true;
    let goodCreditScoreNOT = true;
    let eligebleForLoanNOT = highIncomeNOT || goodCreditScoreNOT;
    
    console.log("eligebleForLoanNOT: ", !eligebleForLoanNOT);


//Logical operators (Non boolean values)
    //Falsy values in js(false)
        //undefined
        //null
        //0
        //false
        //''
        //NaN
    
    //Anything that is not Falsy -> Trythy

    //Examples
    
    console.log("1. Non boolean opetation result: ", false || true);//true
    console.log("2. Non boolean opetation result: ", false || 'Dany');//Dany (truthy value)
    console.log("3. Non boolean opetation result: ", false || 1);//1 (truthy value)

    //we call this "short-circuiting", ignore everything after the truthy value finded
    console.log("4. Non boolean opetation result: ", false || 1 || 2);//1 (truthy value)

    //Real example to use Non boolean operations
    let userColor = 'red';
    let defaultColor = 'blue';
    let currentColor = userColor || defaultColor;

    console.log("Current color: ", currentColor);//red, truthy result

    let userColor2 = undefined;
    let defaultColor2 = 'blue';
    let currentColor2 = userColor2 || defaultColor2;

    console.log("Current color: ", currentColor2);//blue, truthy result using default value

//Bitwise 

    //binary system
    // 1 = 00000001
    // 2 = 00000010
    // 3 = 00000011
    // 4 = 00000100
    // ...

    //Example, OR Bitwise operand ('|')
    // 1 = 00000001
    // 2 = 00000010
    //Result
    // 3 = 00000011

    console.log("OR bitwise operand: ", 1 | 2);//Bitwise OR result, 3

     //Example, ANS Bitwise operand ('&')
    // 1 = 00000001
    // 2 = 00000010
    //Result
    // 0 = 00000000

    console.log("OR bitwise operand: ", 1 & 2);//Bitwise AND result, 0


    //Real example of use bitwise operand

    //Read, Write and Execute permisions

    //Read -----> 00000100
    //Write ----> 00000010
    //Execute --> 00000001 

    const readPermission = 4;
    const writePermission = 2;
    const executePermission = 1;

    let myPermission = 0;

    myPermission = myPermission | readPermission | writePermission;

    console.log("my permission: ",myPermission);

    let message = (myPermission & readPermission) ? 'yes' : 'no';
    console.log("message permission: ", message);


///Operators Precedence

    //1. ^
    //1. *
    //1. '/'
    //1. '%'
    //2. +
    //2. -

    let a = 2 + 3 * 4;//first execute 3 * 4 and then we add 2 value to that result, 14
    let b = (2 + 3) * 4;//first execute (2 + 3) and then we execute the result (* 4) , 20

    console.log("1. result of precedence: ", a);
    console.log("2. result of precedence: ", b);

