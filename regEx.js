let txt = "Programming courses always starts with a hello world example hello."
let regex1 = new RegExp("hello", "gim"); // 1º a expressão 2º as flags
let regex2 = /hello/g; // modo literal

////// MÉTODOS DO OBJETO RegExp

// 1º TEST = RETORNA TRUE SE ENCONTRAR MATCH
console.log(regex1.test(txt));
console.log(regex2.test("hello"));

// 2º EXEC RETORNA ARRAY DO MATCHES COM PROPRIEDADES, INDEX, GROUP, LENGTH, E O TEXTO DO MATCH
console.log(regex2.exec(txt)); // mostra o primeiro item/match do array / caso queira ver o 2º match(2º item do array), usar console.log de novo. O exec grava posição.
console.log(regex2.exec(txt)); // acessar o segundo match do array

// 3º toString - retorna o texto literal do regex
console.log(regex2.toString()); // retorna exatamente a expressão  do regex2

console.log("---------------------------------STRING-------------------------------------------");

/////// MÉTODOS DO STRING

let regex3 = /s\s/ig;
// 1º MATCH = IGUAL O EXEC, retorna array dos matches
console.log(txt.match(/course/gi));
console.log(txt.match(regex3));
console.log(regex3.exec(txt));

let str = "This45consists65of75numbers85and95letters"
console.log(str.match(/\w{4,}?/g).length)

console.log(str.match(/$/g));

// 2º SEARCH - retorna índice só da 1ª ocorrência
console.log(txt.search(regex2));

// 3º REPLACE - retorna nova string com alteração das palavras que deu match
console.log(txt.replace(regex2, "hi"));

// 4º SPLIT - converte string num array, usa o regex pra dar match num separar/delimitador
console.log(txt.split(/\s/)); // converte a string num array separando quando encontra espaço