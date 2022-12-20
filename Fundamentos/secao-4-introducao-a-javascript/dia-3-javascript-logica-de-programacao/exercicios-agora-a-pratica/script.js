// 1- Crie um algoritmo que imprima na tela o fatorial de 10.
const number = 10
let fatorialNumber = 1

for(let index = 1; index <= number; index += 1){
  fatorialNumber = fatorialNumber * index
}
console.log(fatorialNumber);

// 2- Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';
let newWord = "";
for(let index = word.length - 1; index >= 0; index -= 1){
  newWord += word[index]
}
console.log(`"${newWord}"`);

// 3- Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

// Utilize a estrutura de repetição for para escrever dois algoritmos:
// um que imprima no console a maior palavra desse array e outro que imprima a menor.
// Considere o número de caracteres de cada palavra.

let biggestWord = "";

for(let index of array) {
  if(index.length > biggestWord.length)
  biggestWord = index
}
console.log(biggestWord);

let shortestWord = "";
for(let index = 0; index < array.length; index += 1){
  if(index.length < shortestWord.length){
    shortestWord = index
  }
}
console.log(shortestWord);

//escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.
