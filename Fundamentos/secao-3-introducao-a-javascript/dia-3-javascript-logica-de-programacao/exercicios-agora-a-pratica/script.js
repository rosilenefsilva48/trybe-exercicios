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

//let array = ['java', 'javascript', 'python', 'html', 'css'];

// Utilize a estrutura de repetição for para escrever dois algoritmos:
// um que imprima no console a maior palavra desse array e outro que imprima a menor.
// Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = array[0];
let shortestWord = array[0];

for(let index = 0;index < array.length; index +=1) {
  if(array[index].length > biggestWord.length)
  biggestWord = array[index];
}
console.log(biggestWord);

for(let index = 0;index < array.length; index +=1){
  if(array[index].length < shortestWord.length){
    shortestWord = array[index];
  }
}
console.log(shortestWord);

//escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

let biggestPrimeNumber = 0;


for(let index = 2; index <+ 50; index +=1){
  let isPrime = true;
  for(let secondIndex = 2; secondIndex < index; secondIndex +=1){
    if(index % secondIndex === 0){
      isPrime = false;
    }
  }
  if(isPrime) {
    biggestPrimeNumber = index
  }
}
console.log(biggestPrimeNumber);

