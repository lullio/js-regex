/*
Validate phone numbers entered into the text field. As the number is entered, check to see if it matches these formats: (nnn)-nnn-nnnn, nnn.nnn.nnnn, nnn-nnn-nnnn, nnnnnnnnnn, (nnn)nnn-nnnn. If the number matches, change the text color from red to green.

Use several different phone numbers to test.

HINT: You can use the keyup event to respond to entered text. There is a CSS Class for red and green.
*/
let regEx = /^\(?\d{3}[).]?[-.]?\d{3}[-.]?\d{4}$\b/;

let phone = document.getElementById("phone");

(function(){
    phone.addEventListener("keyup", function(){
        if(regEx.test(phone.value)){
            phone.classList.remove("red");
            phone.classList.add("green");
        }else{
            phone.classList.remove("green");
            phone.classList.add("red");
        }
    })
})();