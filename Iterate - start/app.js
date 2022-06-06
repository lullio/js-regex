/*
Iterate over each match and log the information to the console.
*/

let phrase = "First number: 32, and a second number 100. Here is the last number 15.";

let rgx = /\d+/g;
let deuMatch = null;
// lastIndex é propriedade do RegExp disponível pra Exec ou Test
// lastIndex representa a posição/index logo após o último match(ex: teve um match e ultimo index desse match é 3, o lastIndex vai ser 4 então)

while(deuMatch = rgx.exec(phrase)){
   console.log(deuMatch); // mostra os arrays dos matches
}

// CUIDADO
rgx = /\d*/g; // com * é 0 ou mais digitos, 0 digitos produz um match de tamanho 0, 0 length, então o lastIndex vai ser sempre 0

console.log("index: " + phrase.match(rgx).length);
while(deuMatch = rgx.exec(phrase)){
   console.log(deuMatch); // loop infinito, sempre mostrando o 1º match
}

// resolver checando o index do match
while(deuMatch = rgx.exec(phrase)){
   if(deuMatch.index == rgx.lastIndex) rgx.lastIndex++; // se o lastIndex for igual a 0 incrementa 1
   console.log(deuMatch); // percorre cada caractere da string, uma posição de cada vez
}