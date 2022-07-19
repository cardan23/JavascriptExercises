//Template Literals

//String primitive
//if we have a long string like this one
//and we want to separate it into two parts with a "end of line"
const message = 
    'this is a long message and we need\n' + 
    'to show this in two separated lines';

console.log('string primitive',message);

//To avoid the ugly code above we have 
//Template literals, indicated by ``

const anotherMessage = `This is a long message too,
so we want to show this in separated lines`;

console.log('Template literal', anotherMessage);


//A real example of using this is an email
//we can have something like this...

const nameEmail = 'John';
const messageEmail = 'Hi';

const bodyEmail = `${messageEmail} ${nameEmail},

thank you for joining my mailing list

Regards`;

console.log(bodyEmail);
