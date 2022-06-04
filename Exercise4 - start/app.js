/*
The content.js file contains a string of text stored in a variable text1. This string of text is a statement that contains a day of the week as a part of the statement. Write a regular expression that will match any day of the week and then replace that day of the week in the string with Monday. Display the results to the console. 
*/
let text1 = require('./content');

let regEx1= /[mtwfs]\w{0,3}[eoru][sirn]day/gi;

console.log(text1);
console.log("RESPOSTA:\n\n");

console.log(text1.replace(regEx1, "Monday"));
