// EXEC MÉTODO DO OBJETO RegExp
// retorna um array com match e mais dados

let rgx = /o/g;
let stri = "How many Os are in our overly long string?";
// console.log(rgx.exec(stri));
// index de onde o último match parou.
// console.log(rgx.lastIndex);

console.log("ITERATING-----");
// Iterating over matches 
let arr, cnt=0;
while((arr=rgx.exec(stri)) !== null){ // retorna o array do match pra variavel arr
   // continua no loop enquanto tiver matches(se o exec ñ achar match ele retorna null)
   console.log(arr);
   console.log(rgx.lastIndex);
   // cada novo match começa do lastIndex
   cnt++; // contar numero de matches
}
console.log(cnt);


// matchAll - novo
const iterable = stri.matchAll(rgx);
console.log(iterable); // cria um interagidor
console.log(iterable.next()); // retorna um objeto com o array do match dentro da key 'value'
console.log(iterable.next().value); // array do match contendo os mesmos dados do exec

// para ir para o próximo match usar iterable.next() de novo