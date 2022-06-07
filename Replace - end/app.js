/*
Create a new array that shows the names with the firstname and then the surname.
*/

let names = ["Smith, James", "Peterson, Alyssa", "Johnson, Lynette", "Lopez, Tony"];

// SOLUÇÃO 1
let newNames = names.map(function(name) {
    return name.replace(/(\w+), (\w+)/, "$2 $1");
});



// SOLUÇÃO 2
let strNames = names.join('\n'); // converte array pra string separando por quebra de linha
console.log(strNames);

// https://www.programiz.com/javascript/library/string/matchall

console.log(strNames.matchAll(/(\w+), (\w+)/g).next()); // 1º match do interagidor

let matchesIterator = strNames.matchAll(/(\w+), (\w+)/g); // cria um interator
console.log(Array.from(matchesIterator)); // converte pra array
console.log(Array.from(matchesIterator).length); // tam do array, count matches

// looping thorough the iterator
for(match of matchesIterator){
    console.log(match[2]+", "+match[1]);
}
