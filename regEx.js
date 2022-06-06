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
console.log(regex2.lastIndex); // o exec guarda o ultimo indice de onde parou, o ultimo match parou neste indice, entao é esse indice q ele vai começar a olhar por outro match


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



///////// GROUP
let data = '2018-3-9 asas 2019-5-15';
let year, month, day;
let reg = /(\d\d\d\d)[-./](\d{1,2})[-./](\d{1,2})/g;
let arr = reg.exec(data);
console.log(arr);
// primeiro item do array é o match (2018-3-9), segundo item do array é o dado capturado do 1ºgrouping(que é o ano 2018)
console.log(arr[0]); // match
console.log(arr[1]); // dado do grouping 1 2018
console.log(arr[2]); // dado do grouping 2 3
console.log(arr[3]); // dado do grouping 2 9

// EM VEZ DE USAR SPLIT VAMOS USAR O GROUPING DO RegExp PRA CAPTURAR AS DATAS
if(reg.test(data)){
   arr[1] =  year;
   arr[2] = month;
   arr[3] = day;
}

// EXTRAIR DOMÍNIO COM LOOKAHED GROUPING
let data1 = "allthings.com google.com http://youtube.com";

// dar match em domínios que usam .com mas ñ capturar o .com, basta usar lookahead grouping ?=
let reg1 = /\w+(?=\.com)/g,
    arr1 = data1.match(reg1);
console.log(arr1);

let regexTwitter = /^@?(\w+)$/;
let regexEmail = /^[^\s@]+@[^\s@.]+\.[^\s@.]+$/; // negar espaço, @ e ponto, dividir em 3 partes, testar colocando ponto do domínio e nomeEmail

let htmlTag = "<b>This is bold</b>".replace(/b>/g, "strong>"); // trocar <b></b> por <strong></strong>

///////////////////////EXEC
// 
let phrase = 'First number: 32, and a second number 100. Here is the last number 15.';
let matchstart, matchlength, match;
let result1 = /\d+/.exec(phrase);
if(result1){
   matchstart = result.index; // o exec guarda uma propriedade index no array
   matchlength = result[0].length; // 1ºelemento do array retornado pelo exec é o Match
   match = result[0];
}



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