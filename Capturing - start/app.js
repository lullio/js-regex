/*
Extract all the numbers from this phrase and capture those numbers. Then sum the numbers.
*/

let phrase = "First number: 32, and a second number 100. Here is the last number 15.";

let regex = /\d{2,3}/g;
let sum = 0;

// SOLUÇÃO 1
let numbers = phrase.match(regex);
for(number of numbers){
   // parseInt(number);
   // console.log(number);
   sum += parseInt(number);
   console.log("sum:" + sum);
}
console.log(sum);



// SOLUÇÃO 2
console.log("REDUCE");
let num1 = numbers[0], num2 = numbers[1], num3 = numbers[3];

if(numbers){ // se tiver algo dentro de numbers
   total = numbers.reduce((sum, val) => sum + parseInt(val), 0)
}
console.log(total);

// EXPLICAÇÃO MÉTODO REDUCE DO ARRAY
numbers.reduce((initialvalue, valorDoArray, indice, array) =>{
   console.log("initial value: " + initialvalue);
   console.log("valor do array: " + valorDoArray);
   console.log("indice:  " + indice);
   console.log("b:array " + array);
   return null; // se ñ tiver um retorno, o initialvalue é igual undefinied
}, 25)

const people = [
   {name: 'kyle', age:25},
   {name: 'julia', age:25},
   {name: 'John', age: 12},
   {name: 'bob', age: 4}
];

const result = people.reduce((pessoasAgrupadasIdade, pessoa) => {
   const age = pessoa.age; // pegar idade
   // checar se ja temos uma pessoa com essa idade
   if(pessoasAgrupadasIdade[age] == null){ // significa q ñ tem ngm com essa idade
      // console.log(pessoasAgrupadasIdade);
      // console.log(pessoa);
      pessoasAgrupadasIdade[age] = []; // 
      console.log(pessoasAgrupadasIdade[age]);
   }
   pessoasAgrupadasIdade[age].push(pessoa)
   return pessoasAgrupadasIdade
}, {}) // queremos começar um objeto vazio
   console.log(result);