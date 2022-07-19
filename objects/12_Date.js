//Date object

//js Date documentation
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

//formats supported into js about Date
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#examples

const dateNow = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9, 0);

//getting day number of "dateNow"
dateNow.getDay();

//setting year 2017 to "dateNow" object
dateNow.setFullYear(2017);

//we have a complete list of "get" and "set" methods
//for Date Object, so you can check documentation for more details
//this is only a guide to let you now this object exists and you
//can use dates with this object in javascript
