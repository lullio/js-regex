/*
Validate phone numbers entered into the text field. As the number is entered, check to see if it matches these formats: (nnn)-nnn-nnnn, nnn.nnn.nnnn, nnn-nnn-nnnn, nnnnnnnnnn, (nnn)nnn-nnnn. If the number matches, change the text color from red to green.

Use several different phone numbers to test.

HINT: You can use the keyup event to respond to entered text. There is a CSS Class for red and green.
*/
let regEx = /^\(?\d{3}[).]?[-.]?\d{3}[-.]?\d{4}$\b/;

let phone = document.getElementById("phone");

// Immediately invoked function expression- uma função em JavaScript que é executada assim que definida.
// A primeira parte é a função anônima cujo escopo léxico é encapsulado entre parênteses. Isso previne o acesso externo às variáveis declaradas na IIFE(Immediately invoked function expression), bem como evita que estas variáveis locais poluam o escopo global.
// A segunda parte corresponde à criação da expressão (), por meio da qual o interpretador JavaScript avaliará e executará a função.

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