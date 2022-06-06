let pessoa1 = {
   firstName: "Felipe",
   lastName: "Lullio",
   age: 25,
   email: "felipelullio@gmail.com",
   type: {
      type1: "admin",
      type2: "user"
   },
   addresses: {
      address1: {
         street: "rua coimbra",
         number: "255",
         apartment: "0",
         zip: 1001
      },
      address2:{
         street: "rua coimbra",
         number: "255",
         apartment: "0",
         zip: 1001
      }
   },
   food: {
      favoriteDrink: {
         badDrink: ['soda', 'coca', 'beer'],
         goodDrink: ['water', 'juice'],
         tastes: {
            taste1: 'good',
            taste2: 'bad'
         }
      },
      favoriteFood: {
         badFood: "sanduiche",
         goodFood: "fruit"
      }
   }
}


// EXTRAIR AS KEYS E VALUES DO OBJETO
console.log(Object.keys(pessoa1)); // array com tds keys
console.log(Object.values(pessoa1)); // array com tds values do objeto

// EXTRAIR OS DADOS DO OBJETO, EXTRAI A KEY E O VALOR AO MESMO TEMPO(EXTRAI A PROPRIEDADE EM UM ARRAY)

const e = Object.entries(pessoa1); // array com todas propriedades
console.log(e); // array com todas propriedades
console.log(e[0]); // 1ª propriedade, é um array com o nome da key e valor da key ['firstName', 'Felipe']
console.log(e[0][0]); // só a key da 1ª propriedade

// FOR IN LOOP FUNCIONA BEM PARA OBJETOS  - exibe as keys e os valores
// pra acessar os valores precisar usar objeto[key]
for(key in pessoa1){
   console.log("KEYteste: " + key + " Valueteste: " + pessoa1[key]);
}

// MAS E OS OBJETOS QUE ESTÃO DENTRO DO OBJETO? SÓ ESTÃO RETORNANDO COMO Object, como acessar as keys e os valores deles?


for(key in pessoa1){
   // se o valor for objeto, executa o for in loop novamente
   if(isObject(pessoa1[key])){
      // fazer um outro for in loop pra pegar as keys e valores do objeto
      for(key2 in pessoa1[key]){
         console.log(key2 + pessoa1[key][key2]); // pega as keys, type1 e type e seus valores
      }
   }else{
      console.log("key: "+ key + " - value: " + pessoa1[key]);
   }
}

// criar uma função pra checar se o valor da key do objeto é um objeto
function isObject(val){
   // primeiro queremos nos livrar de null values
   if(val === null){ // se é null ñ é um objeto
      return false;
   }
   return (typeof val === 'object'); // retorna true se for objeto
}

// MAS E SE TIVER UM OBJETO DE OBJETO NO VALOR?

// vai ficar adicionando if e loop? melhor criar uma função que pode chamar, toda vez que encontrar um objeto a função chama ela novamente, vai até o objeto e continua..

// a key food tem como valor um objeto favoriteDrink q tem como valor um Obj tastes
for(key in pessoa1){
   if(isObject(pessoa1[key])){
      for(key2 in pessoa1[key]){
         console.log(key2 + pessoa1[key][key2]); 
      }
   }else{
      console.log("key: "+ key + " - value: " + pessoa1[key]);
   }
}

function objProps(obj){
   for(key in obj){
      if(isObject(obj[key])){

         // em vez de fazer um for in loop, chamar a própria função e passar o objeto como argumento
         objProps(obj[key], key);
         // for(key2 in obj[key]){
         //    console.log(key2 + obj[key][key2]); 
         // }
      }else{
         console.log("key: "+ key + " - value: " + obj[key]);
      }
   }
}
objProps(pessoa1); // solução


// SE FOR ARRAY? array é um objeto
function objProps(obj, origProp){
   for(key in obj){
      if(isObject(obj[key])){

         // em vez de fazer um for in loop, chamar a própria função e passar o objeto como argumento
         objProps(obj[key]);
         // for(key2 in obj[key]){
         //    console.log(key2 + obj[key][key2]); 
         // }
      }else{
         // SE FOR ARRAY
         if(Array.isArray(obj)){
            // mostrar a pripriedade do array, nome
            console.log( origProp + key, obj[key]);
         }else{
            console.log("key: "+ key + " - value: " + obj[key]);
         }
      }
   }
}