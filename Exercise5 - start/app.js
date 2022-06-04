/*
Iterate through the data provided. Use a regular expression to store the names in a new array but change the order of the name so first name is listed first and last name is last. 
*/

let data = ["Jensen, Dale", "Smith, Andrea", "Jorgensen, Michael", "Vasefi, Annika", "Lopez, Monica", "Crockett, Steven"];

const regex = /(\w+), (\w+)/;
const regex1 = /^(?<lastName>[A-Z]{1,15}), (?<firstName>[A-Z]{1,15})/i;

// match retorna um array com os dados capturados
// ÚTIL PRA VC ENTENDER A SOLUÇÃO 2
let test = data[0].match(regex1); 
// variável test é um array com os dados do 1º match (Jensen Dale). SEMPRE ARMAZENAR O RESULTADO DO EXEC e MATCH numa outra variável.
console.log(test[2]); // pegando o nome

// lembra que o método exec captura os valores dos grupos ( ) na propriedade groups do array
console.log(regex1.exec(data[0]));

console.log("Teste usando String.replace e $2 $1 para inverter valores capturados dos grupos regex  ↧");
console.log("Jensen, Dale".replace(regex, '$2, $1'));


console.log("SOLUÇÕES ABAIXO:  ↧");
// SOLUÇÃO 1 MINHA - map(Array.prototype.map) e exec (RegExp.prototype.exec) 
let arrNomeSobrenome = data.map(val => {
   let arr = regex1.exec(val); // exec retorna array com dados do primeiro match
   if(arr !== null && arr !== undefined){
      return `${arr.groups.firstName}, ${arr.groups.lastName}`
   }
})
console.log("SOLUÇÃO 1: MAP COM EXEC CAPTURANDO OS GRUPOS  ↧");
console.log(arrNomeSobrenome);

// testando o regex em todos valores do array pra ver se retorna true
// tava retornando true e false, arrumei tirando a global flag /g
// global com exec ou test, ele salva a posição index/indíce do último match, o próximo match começa nessa posição index/indíce que ele parou, isso joga fora o match
console.log("Usando o 'for of loop' for(value of array) e test(RegExp.prototype.test) pra verificar se todos itens do array retornam true  ↧"+ regex1.test(data));
for(val of data){
   console.log(regex1.test(val));
}

/* ----------------------------------------------------------------------- */

// SOLUÇÃO 2 for loop com exec(RegExp.prototype.exec)
let arr, arr1 = [];
for(let i = 0; i < data.length; i++){
   if(regex.test(data[i])){
      arr = regex.exec(data[i]); 
      arr1[i] = arr[2] + ", " + arr[1]; // Exec armazena os valores dos grupos na posição 1 e 2 do array
   }
}
console.log("SOLUÇÃO 2: FOR LOOP COM EXEC  ↧");
console.log(arr1);

/* ----------------------------------------------------------------------- */

// SOLUÇÃO 3 - Usando o replace(tring.proptotype.replace)
const arrCorreto = data.map(val =>{
   return val.replace(regex1, "$2, $1"); //$2 $1 pode ser usado para regex para pegar os valores do match
})
console.log("SOLUÇÃO 3: String.replace $2 $1  ↧");
console.log(arrCorreto);

/* ----------------------------------------------------------------------- */

// SOLUÇÃO 4 - USANDO Match(String.prototype.match)

let newData = data.map(val => val.match(regex1))
const nameSurnameArray = data.map((item) => {
   const [, surname, name] = item.match(regex);
   return `${name}, ${surname}`;
 });

 /* ----------------------------------------------------------------------- */

// SOLUÇÃO 5 FOREACH com String.replace
data.forEach((val, i, arr) => {
   const [txt, lastName, firstName] = regex1.exec(val);
   arr[i] = firstName + ", " + lastName;
})
console.log("SOLUÇÃO 4: forEach com exec apenas INTERESSANTE SOLUTION  ↧");
console.log(data); // esse tá certo, usei o forEach acima pra alterar os valores do array original. 
console.log(arr); // retorna só o último valor do array, tá errado;

// https://stackoverflow.com/questions/12482961/change-values-in-array-when-doing-foreach
// https://code.tutsplus.com/tutorials/javascript-map-vs-foreach-when-to-use-each-one--cms-38365





