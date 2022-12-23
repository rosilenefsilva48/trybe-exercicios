/*
Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

Array de teste: [2, 3, 2, 5, 8, 2, 3];.

Valor esperado no retorno da função: 2.
*/
function mostRepeated(integers) {
  
  let mostRepeatedCounter = 0;
  let actualNumberCounter = 0;
  let mostRepeatedIndex = 0;

  for(let index in integers) {
    let checkNumber = integers[index];
    for(let secondIndex in integers) {
      if(checkNumber === integers[secondIndex]) {
        actualNumberCounter += 1;
      }
    }
    if(actualNumberCounter > mostRepeatedCounter) {
      mostRepeatedCounter = actualNumberCounter;
      mostRepeatedIndex = index;
    }
    actualNumberCounter = 0;
  }
  return integers[mostRepeatedIndex];
}
console.log(mostRepeated([2, 3, 2, 5, 8, 2, 3]));